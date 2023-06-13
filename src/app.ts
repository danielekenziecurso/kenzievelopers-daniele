import express, { Application } from "express";
import "express-async-errors";
import "dotenv/config";
import { clientsDevelops } from "./routers/developers.routes";
import { clientProjects } from "./routers/projects.routes";
import handleError from "./middlewares/handleErrors.midllewares";

const app: Application = express();
app.use(express.json());

app.use("/developers", clientsDevelops);

app.use("/projects", clientProjects);

app.use(handleError);

export default app;
