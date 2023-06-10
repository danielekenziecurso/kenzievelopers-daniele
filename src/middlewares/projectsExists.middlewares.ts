import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { QueryResult } from "pg";
import { TDeveloperInfosRequest } from "../interfeces/developrInfos.interfaces";

const developerProjectsExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const query: QueryResult<TDeveloperInfosRequest> = await client.query(
    'SELECT * FROM  projects WHERE projects."developerId"= $1;',
    [req.params.id]
  );

  if (query.rowCount === 0) {
    return res.status(404).json({ erros: "Developer not found!" });
  }

  next();
};

export { developerProjectsExistsMiddleware };
