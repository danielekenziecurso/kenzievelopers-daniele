import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../../database";
import {
  TDeveloper,
  TDeveloperRequest,
} from "../../interfeces/developers.interfaces";

const createDevelopersService = async (
  developerData: TDeveloperRequest
): Promise<TDeveloper> => {
  const values: Array<string> = Object.values(developerData);
  const keys: Array<string> = Object.keys(developerData);

  const formatString: string = format(
    `
      INSERT INTO
             developers
           (%I)        
      VALUES
           (%L) 
         RETURNING *;
    `,
    keys,
    values
  );

  const queryResult: QueryResult<TDeveloper> = await client.query(formatString);

  return queryResult.rows[0];
};

export { createDevelopersService };
