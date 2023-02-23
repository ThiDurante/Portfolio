import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Connected to DB");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, "127.0.0.1", () => {
  console.log("Server ONLINE");
});
