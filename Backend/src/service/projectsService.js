import Project from "../models/projectModel.js";
import Joi from "joi";

const projectSchema = Joi.object({
  name: Joi.string().max(25).required(),
  status: Joi.string().max(20).required(),
  link: Joi.string().required(),
  image: Joi.array().items(Joi.string()),
  description: Joi.string().required(),
  type: Joi.string().required(),
});

class projectsService {
  constructor(info) {
    this.info = info;
  }
  getAll = async () => {
    const data = await Project.getall();
    return data;
  };

  create = async (info) => {
    const { error } = projectSchema.validate(info);
    if (error) return { message: error.details[0].message };
    try {
      const newProject = await Project.create(info);
      return newProject;
    } catch (error) {
      return { message: "Project already exists" };
    }
  };
  update = async (id, info) => {
    const item = Project.findByIdAndUpdate(id, info);
    return item;
  };

  deleteProject = async (id) => {
    const item = Project.findByIdAndDelete(id);
    return item;
  };
}

export default projectsService;
