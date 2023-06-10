import { Request, Response } from "express";
import { deleteDeveloperservices } from "../../services/developers/deleteDeveloper.services";

const deleteDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteDeveloperservices(req.params.id);
  return res.status(204).json();
};

export { deleteDeveloperController };
