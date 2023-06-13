import { Router } from "express";
import { createProjetsController } from "../controllers/projectsControllers/createProjets.Controllers";
import { developerProjectsExistsMiddleware } from "../middlewares/projectsExists.middlewares";
import { getProjectByIdController } from "../controllers/projectsControllers/getProjects.controllers";
import { projectsByIdExistsMiddleware } from "../middlewares/projectsByIdExists.middlewares";
import { UpdateProjectController } from "../controllers/projectsControllers/updateProjects.Controllers";
import { developerByIdExistsMiddleware } from "../middlewares/developerByIdexists.middlewares";

const clientProjects: Router = Router();

clientProjects.post(
  "",
  developerProjectsExistsMiddleware,
  createProjetsController
);
clientProjects.get(
  "/:id",
  projectsByIdExistsMiddleware,
  getProjectByIdController
);
clientProjects.patch(
  "/:id",
  developerByIdExistsMiddleware,
  projectsByIdExistsMiddleware,
  UpdateProjectController
);

export { clientProjects };
