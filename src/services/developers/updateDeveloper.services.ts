import {
  TDeveloper,
  TDeveloperRequest,
} from "../../interfeces/developers.interfaces";
import format from "pg-format";
import { QueryResult } from "pg";
import { client } from "../../database";

const updateDeveloperservices = async (
  payload: TDeveloperRequest,
  developerId: string
): Promise<TDeveloper> => {
  const queryString: string = format(
    `
          UPDATE
               "developers"
          SET(%I) = row(%L)
          WHERE
              id = $1
         RETURNING *;
      `,
    Object.keys(payload),
    Object.values(payload)
  );
  const queryResult: QueryResult<TDeveloper> = await client.query(queryString, [
    developerId,
  ]);

  return queryResult.rows[0];
};

export { updateDeveloperservices };
