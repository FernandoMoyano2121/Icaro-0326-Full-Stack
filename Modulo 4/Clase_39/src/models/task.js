let tasks = [
  { id: 1, title: "Aprender Express.js", completed: true },
  { id: 2, title: "Estudiar el patrón MVC", completed: true },
  { id: 3, title: "Crear una API REST", completed: false },
  { id: 4, title: "Conectar con base de datos", completed: false },
  { id: 5, title: "Implementar autenticación", completed: false },
];

export class Task {
  static nextId = 6;

  constructor({ title, completed = false }) {
    this.id = Task.nextId++;
    this.title = title;
    this.completed = completed;
  }

  /**
   * Devuelve todas las tareas
   * @returns {Array} Lista de tareas
   */
  static findAll() {
    return tasks;
  }

  /**
   * Busca una tarea por ID
   * @param {number} id - ID de la tarea
   * @returns {Task|undefined} Tarea encontrada o undefined
   */
  static findById(id) {
    return tasks.find((t) => t.id === id);
  }

  /**
   * Crea y almacena una nueva tarea
   * @param {Object} data - Datos de la tarea { title, completed? }
   * @returns {Task} La tarea creada
   */
  static create(data) {
    const task = new Task(data);
    tasks.push(task);
    return task;
  }

  /**
   * Actualiza una tarea existente
   * @param {number} id - ID de la tarea
   * @param {Object} data - Datos a actualizar { title?, completed? }
   * @returns {Task|null} Tarea actualizada o null si no existe
   */
  static update(id, data) {
    const task = tasks.find((t) => t.id === id);

    if (!task) return null;

    if (data.title !== undefined) task.title = data.title;
    if (data.completed !== undefined) task.completed = data.completed;

    return task;
  }

  /**
   * Elimina una tarea
   * @param {number} id - ID de la tarea
   * @returns {boolean} true si se eliminó, false si no existía
   */
  static delete(id) {
    const index = tasks.findIndex((t) => t.id === id);

    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
  }
}
