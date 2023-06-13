import { Router } from "express";
import { createDevelopersController } from "../controllers/developerControllers/developrs.controllers";
import { createDevelopersInfosController } from "../controllers/developerControllers/developerInfos.controllers";
import { developerCheckEmailExists } from "../middlewares/developerEmailExists.middlewares";
import { getDeveloperByIdController } from "../controllers/developerControllers/getDeveloperById.controller";
import { developerExistsMiddleware } from "../middlewares/developerExists.middleware";
import { UpdateDevelopersController } from "../controllers/developerControllers/UpdateDeveloper.controllers";
import { deleteDeveloperController } from "../controllers/developerControllers/deleteDeveloper.controllers";
import { developerInfosExistsMiddleware } from "../middlewares/developerInfos.middlewares";
import { developerInfosPreferredOSverify } from "../middlewares/developerInfosPreferredOSverify.middlewares";

const clientsDevelops: Router = Router();

clientsDevelops.post("", developerCheckEmailExists, createDevelopersController);

clientsDevelops.get(
  "/:id",
  developerExistsMiddleware,
  getDeveloperByIdController
);

clientsDevelops.patch(
  "/:id",
  developerCheckEmailExists,
  developerExistsMiddleware,
  UpdateDevelopersController
);

clientsDevelops.delete(
  "/:id",
  developerExistsMiddleware,
  deleteDeveloperController
);

clientsDevelops.post(
  "/:id/infos",
  developerInfosPreferredOSverify,
  developerInfosExistsMiddleware,
  developerExistsMiddleware,
  createDevelopersInfosController
);

export { clientsDevelops };
