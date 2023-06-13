import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { QueryResult } from "pg";
import { TDeveloperInfosRequest } from "../interfeces/developrInfos.interfaces";
import { Conflict } from "../error";

const developerInfosExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const query: QueryResult<TDeveloperInfosRequest> = await client.query(
    'SELECT * FROM developerInfos WHERE developerInfos."developerId"= $1;',
    [req.params.id]
  );

  if (query.rowCount !== 0) {
    throw new Conflict("Developer infos already exists!", 409);
  }

  next();
};

export { developerInfosExistsMiddleware };
