import { Request, Response } from "express";
import { updateDeveloperservices } from "../../services/developers/updateDeveloper.services";
import { TProjects } from "../../interfeces/projects.interfaces";
import { updateProjectServices } from "../../services/projects.services.ts/updateProjects.services";

const UpdateProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newdeveloper: TProjects = await updateProjectServices(
    req.body,
    req.params.id
  );

  return res.status(200).json(newdeveloper);
};
export { UpdateProjectController };
