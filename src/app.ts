import express, { Application } from "express";
import "dotenv/config";
import { clientsDevelops } from "./routers/developers.routes";
import { clientProjects } from "./routers/projects.routes";

const app: Application = express();
app.use(express.json());

app.use("/developers", clientsDevelops);

app.use("/projects", clientProjects);

export default app;
