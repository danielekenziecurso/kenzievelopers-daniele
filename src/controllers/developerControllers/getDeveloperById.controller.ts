import { Request, Response } from "express";
import { getDeveloperByIdService } from "../../services/developers/getDeveloperById.services";

const getDeveloperByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const developer = await getDeveloperByIdService(parseInt(id));

  return res.status(200).json(developer);
};

export { getDeveloperByIdController };
