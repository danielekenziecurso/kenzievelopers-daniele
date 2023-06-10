import { QueryResult } from "pg";
import { client } from "../../database";
import { Project } from "../../interfeces/projects.interfaces";


const getProjectByIdService = async (id: number): Promise<Project> => {
  const query = {
    text: `
    SELECT
      "p".id AS "projectId",
      "p".name AS "projectName",
      "p".description AS "projectDescription",
      "p"."repository" AS "projectRepository",
      "p"."startDate" AS "projectStartDate",
      "p"."endDate" AS "projectEndDate",
      "d"."name" AS "projectDeveloperName"
    FROM
      projects AS "p"
    LEFT JOIN
      developers AS "d" ON "p"."developerId" = "d".id
    WHERE
      "p".id = $1;
    `,
    values: [id],
  };

  const queryResult: QueryResult<Project> = await client.query(query);

  return queryResult.rows[0];
};

export { getProjectByIdService };
