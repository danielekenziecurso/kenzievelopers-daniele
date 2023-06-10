import { Request, Response } from "express";
import {
  TDeveloper,
  TDeveloperRequest,
} from "../../interfeces/developers.interfaces";
import { updateDeveloperservices } from "../../services/developers/updateDeveloper.services";

const UpdateDevelopersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newdeveloper: TDeveloper = await updateDeveloperservices(
    req.body,
    req.params.id
  );

  return res.status(200).json(newdeveloper);
};
export { UpdateDevelopersController };
