import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";

const developerInfosPreferredOSverify = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { preferredOS } = req.body;

  const allowedOS = ["Windows", "Linux", "MacOS"];

  if (!allowedOS.includes(preferredOS)) {
    throw new AppError("Invalid OS option!", 400);
  }

  return next();
};

export { developerInfosPreferredOSverify };
