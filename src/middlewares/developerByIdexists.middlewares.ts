import { NextFunction, Request, Response } from "express";
import { AppError, NotFound } from "../error";
import { QueryResult } from "pg";
import { client } from "../database";

const developerByIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { developerId } = req.body; 
  if(!developerId){
    return next();
  }
  const query: QueryResult = await client.query(
    'SELECT * FROM "developers" WHERE "id" = $1;',
    [developerId]
  );

  if (query.rowCount === 0) {
    throw new AppError("developer not found", 404);
  }

  return next();
}

export { developerByIdExistsMiddleware };
