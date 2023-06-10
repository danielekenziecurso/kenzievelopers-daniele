import { Request, Response } from "express";
import { TDeveloper, TDeveloperRequest } from "../../interfeces/developers.interfaces";
import { createDevelopersService } from "../../services/developers/createDevelopers.services";

const createDevelopersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developerData: TDeveloperRequest = req.body;

  const newdeveloper: TDeveloper = await createDevelopersService(developerData);

  return res.status(201).json(newdeveloper);
};

export { createDevelopersController };
