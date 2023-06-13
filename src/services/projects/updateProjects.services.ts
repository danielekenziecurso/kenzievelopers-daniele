import format from "pg-format";
import { QueryResult } from "pg";
import { client } from "../../database";
import {
  TProjects,
  TProjectsRequest,
} from "../../interfeces/projects.interfaces";

const updateProjectServices = async (
  payload: TProjectsRequest,
  developerId: string
): Promise<TProjects> => {
  const queryString: string = format(
    `
          UPDATE
               "projects"
          SET(%I) = row(%L)
          WHERE
              id = $1
         RETURNING *;
      `,
    Object.keys(payload),
    Object.values(payload)
  );
  const queryResult: QueryResult<TProjects> = await client.query(queryString, [
    developerId,
  ]);

  return queryResult.rows[0];
};

export { updateProjectServices };
