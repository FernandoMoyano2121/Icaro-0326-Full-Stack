import { Router } from "express";
import { listTasks } from "../controllers/TaskViewController.js";

const router = Router();

router.get("/tasks", listTasks);

export default router;
