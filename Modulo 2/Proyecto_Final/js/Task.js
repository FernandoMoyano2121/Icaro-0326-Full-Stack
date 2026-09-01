export class Task {
  constructor(id, nombre, prioridad, vencimiento, completada = false) {
    this.id = id;
    this.nombre = nombre;
    this.prioridad = prioridad;
    this.vencimiento = vencimiento;
    this.completada = completada;
  }
}
