import { Request, Response } from "express";
import { getProjectByIdService } from "../../services/projects.services.ts/getProjetsById.services";

const getProjectByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const project = await getProjectByIdService(parseInt(id));

  if (!project) {
    return res.status(404).json({ message: "Project not found." });
  }

  return res.status(200).json(project);
};

export { getProjectByIdController };
