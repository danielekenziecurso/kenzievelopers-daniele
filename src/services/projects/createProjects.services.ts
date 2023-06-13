import format from "pg-format";
import {
  TProjects,
  TProjectsRequest,
} from "../../interfeces/projects.interfaces";
import { QueryResult } from "pg";
import { client } from "../../database";

const createProjectsService = async (
  payload: TProjectsRequest
): Promise<TProjects> => {
  const formatString: string = format(
    `
        INSERT INTO
               "projects"
             (%I)        
        VALUES
             (%L) 
           RETURNING *;
      `,
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: QueryResult<TProjects> = await client.query(formatString);

  return queryResult.rows[0];
};

export { createProjectsService };
