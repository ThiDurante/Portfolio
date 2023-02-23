import express from "express";
import projectsRouter from "./routers/projectsRouter.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/projects", projectsRouter);

export default app;
