import { Request, Response, NextFunction } from "express";
import { getProjectByIdService } from "../services/projects.services.ts/getProjetsById.services";

const projectByDeveloperIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { developerId } = req.body;

  const developer = await getProjectByIdService(developerId);

  if (!developer) {
    return res.status(404).json({ error: "Developer not found." });
  }

  next();
};

export { projectByDeveloperIdMiddleware };
