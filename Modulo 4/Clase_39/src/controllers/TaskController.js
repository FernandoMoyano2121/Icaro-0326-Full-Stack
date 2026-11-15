import { Task } from "../models/task.js";

export const parseTaskId = (value) => {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
};

export const listTasks = (req, res) => {
  const tasks = Task.findAll();
  res.json(tasks);
};

export const getTaskById = (req, res) => {
  const id = parseTaskId(req.params.id);

  if (id === null) {
    return res
      .status(404)
      .json({ error: "El id debe ser un numero entero positivo" });
  }
  const task = Task.findById(id);
  if (!task) return res.status(404).json({ error: "Tarea no encontrada" });
  res.status(200).json(task);
};
