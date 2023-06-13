import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { QueryResult } from "pg";
import { TDeveloperInfosRequest } from "../interfeces/developrInfos.interfaces";
import { NotFound } from "../error";

const projectsByIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const query: QueryResult<TDeveloperInfosRequest> = await client.query(
    'SELECT * FROM  projects WHERE projects."developerId"= $1;',
    [req.params.id]
  );

  if (query.rowCount === 0) {
    throw new NotFound("project not found!", 404);
  }

  next();
};

export { projectsByIdExistsMiddleware };
