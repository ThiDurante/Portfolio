import projectsService from "../service/projectsService.js";

const service = new projectsService();

class projectsController {
  getAll = async (_req, res) => {
    const data = await service.getall;
    return res.status(200).json(data);
  };

  create = async (req, res) => {
    const newProjectCreated = await service.create(req.body);
    if (newProjectCreated.message)
      return res.status(400).json({ message: newProjectCreated.message });
    console.log(newProjectCreated);
    return res.status(201).json(newProjectCreated);
  };

  update = async (req, res) => {
    const updatedProject = await service.update(req.params.id, req.body);
    if (updatedProject.error)
      res.status(404).json({ message: updatedProject.error });
    res.status(200).jon(updatedProject);
  };

  deleteProject = async (req, res) => {
    const deletedProject = await service.deletedProject(req.params.id);
    res.status(204).json(deletedProject);
  };
}

export default projectsController;
