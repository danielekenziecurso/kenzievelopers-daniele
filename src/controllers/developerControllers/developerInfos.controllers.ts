import { Request, Response } from "express";
import {
  TDeveloperInfos,
  TDeveloperInfosRequest,
} from "../../interfeces/developrInfos.interfaces";
import { createDeveloperInfosService } from "../../services/developers/createDeveloperInfos.services";

const createDevelopersInfosController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: TDeveloperInfosRequest = {
    ...req.body,
    developerId: req.params.id,
  };

  const newDeveloperInfos: TDeveloperInfos = await createDeveloperInfosService(
    payload
  );

  return res.status(201).json(newDeveloperInfos);
};

export { createDevelopersInfosController };
