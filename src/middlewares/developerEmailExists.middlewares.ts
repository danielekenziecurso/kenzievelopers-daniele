import { QueryConfig, QueryResult } from "pg";
import {
  TDeveloper,
  TDeveloperRequest,
} from "../interfeces/developers.interfaces";
import { NextFunction, Request, Response } from "express";
import { client } from "../database";

const developerCheckEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const developeEmail: TDeveloperRequest = req.body;

  const queryString: string = `
          SELECT
              * 
          FROM
              developers
          WHERE 
              email = $1;
      `;
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [developeEmail.email],
  };

  const queryResult: QueryResult<TDeveloper> = await client.query(queryConfig);

  if (queryResult.rowCount > 0) {
    return res.status(409).json({
      error: "Email already exists!",
    });
  }
  res.locals.developers = queryResult.rows;
  return next();
};

export { developerCheckEmailExists };
