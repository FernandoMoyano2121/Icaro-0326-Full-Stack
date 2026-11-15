import { Router } from "express";
import { listTasks } from "../controllers/TaskViewController.js";
import { getTaskById } from "../controllers/TaskController.js";

const router = Router();
//http://localhost:3000/api/tasks
router.get("/tasks", listTasks);

//http://localhost:3000/api/tasks/1
router.get("/tasks/:id", getTaskById);

export default router;
