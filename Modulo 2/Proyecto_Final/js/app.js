import { TaskManager } from "./TaskManager";
import { TaskUi } from "./TaskUi";

const manager = new TaskManager();
const taskUi = new TaskUi(manager);

taskUi.render();
