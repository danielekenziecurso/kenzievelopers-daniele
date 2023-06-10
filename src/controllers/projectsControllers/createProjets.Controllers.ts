import { Request, Response } from "express";
import {
  TProjects,
  TProjectsRequest,
} from "../../interfeces/projects.interfaces";
import { createProjectsService } from "../../services/projects.services.ts/createProjects.services";

const createProjetsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const projectsData: TProjectsRequest = req.body;

  const newdeveloper: TProjects = await createProjectsService(projectsData);

  return res.status(201).json(newdeveloper);
};

export { createProjetsController };
