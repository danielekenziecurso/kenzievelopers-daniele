import { QueryResult } from "pg";
import { client } from "../../database";
import { Developer } from "../../interfeces/developrInfos.interfaces";

const getDeveloperByIdService = async (id: number): Promise<Developer> => {
  const queryTemplate: string = `
    SELECT
       "d".id AS "developerId",
       "d".name AS "developerName",
       "d".email AS "developerEmail",
       "di"."developerSince"  AS "developerInfoDeveloperSince",
       "di"."preferredOS"  AS "developerInfoPreferredOS"
    FROM
      "developers" AS "d"
    LEFT JOIN
        "developerInfos" AS "di" ON "d".id = "di"."developerId" 
    WHERE
       "d".id = $1;
    `

  const queryResult: QueryResult<Developer> = await client.query(queryTemplate, [id]);

  return queryResult.rows[0];
};

export { getDeveloperByIdService };
