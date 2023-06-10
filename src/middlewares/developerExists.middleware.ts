import { NextFunction, Request, Response } from "express";
import { getDeveloperByIdService } from "../services/developers/getDeveloperById.services";

const developerExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { id } = req.params;
  const developer = await getDeveloperByIdService(parseInt(id));

  if (!developer) {
    return res.status(404).json({
      error: "Developer not found!",
    });
  }

  next();
};

export { developerExistsMiddleware };
