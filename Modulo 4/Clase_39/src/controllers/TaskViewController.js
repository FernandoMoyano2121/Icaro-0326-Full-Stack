import { Task } from "../models/task.js";

export const listTasks = (req, res) => {
  const tasks = Task.findAll();
  res.render("index", tasks);
};
