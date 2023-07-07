import { Request, Response, NextFunction } from "express";
import { getProjectByIdService } from "../services/projects.services.ts/getProjetsById.services";
import { NotFound } from "../error";

const projectByDeveloperIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { developerId } = req.body;

  const developer = await getProjectByIdService(developerId);

  if (!developer) {
    throw new NotFound("Developer not found!", 404);
  }

  next();
};

export { projectByDeveloperIdMiddleware };
