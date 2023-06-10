import { Request, Response, NextFunction } from "express";

const developerInfosPreferredOSverify = (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> | Response<any, Record<string, any>> | undefined => {
  const { preferredOS } = req.body;

  const allowedOS = ["Windows", "Linux", "MacOS"];

  if (!allowedOS.includes(preferredOS)) {
    return res.status(400).json({ error: "Invalid OS option!" });
  }

  next();
};

export { developerInfosPreferredOSverify };
