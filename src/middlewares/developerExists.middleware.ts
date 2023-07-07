import { NextFunction, Request, Response } from "express";
import { getDeveloperByIdService } from "../services/developers/getDeveloperById.services";
import { AppError, NotFound } from "../error";
import { QueryResult } from "pg";
import { client } from "../database";

const developerExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const query: QueryResult = await client.query(
    'SELECT * FROM "developers" WHERE "id" = $1;',
    [req.params.id]
  );

  if (query.rowCount === 0) {
    throw new AppError("developer not found", 404);
  }

  return next();
}

export { developerExistsMiddleware };
