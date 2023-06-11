import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { QueryResult } from "pg";
import { TDeveloperInfosRequest } from "../interfeces/developrInfos.interfaces";

const developerProjectsExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { developerId } = req.body;

  if (!developerId) {
    return next();
  }

  const query: QueryResult<TDeveloperInfosRequest> = await client.query(
    `SELECT * FROM developers WHERE id = $1;`,
    [developerId]
  );

  if (query.rowCount === 0) {
    return res.status(404).json({ message: "Developer not found!" });
  }

  next();
};

export { developerProjectsExistsMiddleware };
