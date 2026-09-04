import { Task } from "./Task.js";

export class TaskManager {
  constructor() {
    this.tareas = [];
    this.nextId = 1;
  }

  /**
   *
   * @param {string} nombre
   * @param {string} prioridad
   * @param {string} vencimiento
   * @returns {void}
   */
  agregar(nombre, prioridad, vencimiento) {
    const tarea = new Task(this.nextId++, nombre, prioridad, vencimiento);
    this.tareas.push(tarea);
  }

  /**
   *
   * @param {number} id
   * @param {string} nombre
   * @param {string} prioridad
   * @param {string} vencimiento
   * @returns {void}
   */
  editar(id, nombre, prioridad, vencimiento) {
    const tarea = this.tareas.find((t) => t.id === id);

    if (tarea) {
      tarea.nombre = nombre;
      tarea.prioridad = prioridad;
      tarea.vencimiento = vencimiento;
    }
  }

  /**
   *
   * @param {number} id
   * @returns {void}
   */
  eliminar(id) {
    this.tareas = this.tareas.filter((t) => t.id !== id);
  }

  /**
   *
   * @param {number} id
   * @returns {void}
   */
  marcarCompletada(id) {
    const tarea = this.tareas.find((t) => t.id === id);

    if (tarea) {
      tarea.completada = !tarea.completada;
    }
  }

  /**
   *@description funcion que devuelve todas las tareas
   * completadas
   * @returns {Task[]}
   */
  obtenerCompletadas() {
    return this.tareas.filter((t) => t.completada);
  }

  /**
   *@description funcion que devuelve todas las tareas
   * @returns {Task[]}
   */
  obtenerTareas() {
    return [...this.tareas];
  }

  /**
   * @description Funcion que retorna la cantidad de tareas
   * no completadas.
   * @returns {number}
   */
  obtenerPendientes() {
    return this.tareas.filter((t) => !t.completada).length;
  }
}
