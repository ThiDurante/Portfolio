import express from "express";
import projectsController from "../controllers/projectsController.js";

const projectsRouter = express.Router();
const controller = new projectsController();

projectsRouter.route("/").get(controller.getAll).post(controller.create);

projectsRouter
  .route("/:id")
  .patch(controller.update)
  .delete(controller.deleteProject);

export default projectsRouter;
