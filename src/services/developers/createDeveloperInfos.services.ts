import format from "pg-format";
import {
  TDeveloperInfos,
  TDeveloperInfosRequest,
} from "../../interfeces/developrInfos.interfaces";
import { QueryResult } from "pg";
import { client } from "../../database";

const createDeveloperInfosService = async (
  developerData: TDeveloperInfosRequest
): Promise<TDeveloperInfos> => {
  const formatString: string = format(
    `
      INSERT INTO
             "developerInfos"   
           (%I)        
      VALUES
           (%L) 
         RETURNING *;
    `,
    Object.keys(developerData),
    Object.values(developerData)
  );

  const queryResult: QueryResult<TDeveloperInfos> = await client.query(
    formatString
  );

  return queryResult.rows[0];
};

export { createDeveloperInfosService };
