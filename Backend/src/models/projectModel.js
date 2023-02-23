import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Project must have a name"],
    unique: true,
    trim: true,
  },
  status: {
    type: String,
    required: [true, "Need project status"],
  },
  image: {
    type: Array,
    required: [true, "Need an image from the project"],
  },
  link: {
    type: String,
    required: [true, "Need a link from the project"],
  },
  description: {
    type: String,
    required: [true, "Provide a description"],
  },
  type: {
    type: String,
    required: [true, "Must provide front or backend type"],
  },
  createdAt: {
    type: Date,
    default: Date.now(), // date.now gives the timestamp in miliseconds, mongo converts it automatically to normal date
  },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
