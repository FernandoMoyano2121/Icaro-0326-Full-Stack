export class TaskUi {
  constructor(manager) {
    this.manager = manager;
    this.tareaEditando = null;

    /* Elementos del DOM */
    this.nombre = document.getElementById("nombreTarea");
    this.prioridad = document.getElementById("prioridadTarea");
    this.vencimiento = document.getElementById("fechaVencimiento");
    this.btnAgregar = document.getElementById("agregarTarea");
    this.listado = document.getElementById("listadoTareas");
    this.pendientes = document.getElementById("tareasPendientes");

    this.btnAgregar.addEventListener("click", () => this.handleAgregar());
  }

  handleAgregar() {
    const nombre = this.nombre.value.trim();
    const prioridad = this.prioridad.value;
    const vencimiento = this.vencimiento.value;

    if (!nombre || !prioridad || !vencimiento) {
      alert("Debes rellenar todos los campos");
      return;
    }

    if (this.tareaEditando) {
      this.manager.editar(
        this.tareaEditando.id,
        nombre,
        prioridad,
        vencimiento,
      );
      this.tareaEditando = null;
      this.btnAgregar.textContent = "Guardar";
    } else {
      this.manager.agregar(nombre, prioridad, vencimiento);
    }
    this.limpiarFormulario();
    this.render();
  }

  cargarParaEdicion(tarea) {
    this.nombre.value = tarea.nombre;
    this.prioridad.value = tarea.prioridad;
    this.vencimiento.value = tarea.vencimiento;

    this.tareaEditando = tarea;
    this.btnAgregar.textContent = "Guardar Cambios";
  }

  render() {
    this.listado.innerHTML = "";
    this.manager.obtenerTareas().forEach((tarea) => {
      this.listado.appendChild(this.crearItemTarea(tarea));
    });
    this.actualizarPendientes();
  }

  crearItemTarea(tarea) {
    /* Item de la tarea */
    const item = document.createElement("li");
    item.className =
      "list-group-item d-flex justify-content-around align-items-center";

    //Crear Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada;

    //Adjuntar el evento al checkbox
    checkbox.addEventListener("change", () => {
      this.manager.marcarCompletada(tarea.id);
      this.render();
    });

    //Crear Informacion de la tarea
    const info = document.createElement("span");
    info.innerHTML = ` <strong>${tarea.nombre}</strong> |
      Prioridad: ${tarea.prioridad} |
      <strong>Vence: ${tarea.vencimiento}</strong>`;

    //Crear botones
    const btnEditar = this.crearBoton("Editar", "btn btn-success");
    const btnEliminar = this.crearBoton("Eliminar", "btn btn-danger");

    btnEditar.addEventListener("click", () => this.cargarParaEdicion(tarea));

    btnEliminar.addEventListener("click", () => {
      this.manager.eliminar(tarea.id);
      this.render();
    });

    item.append(checkbox, info, btnEditar, btnEliminar);

    return item;
  }

  crearBoton(texto, clase) {
    const btn = document.createElement("button");
    btn.textContent = texto;
    btn.className = clase;

    return btn;
  }

  actualizarPendientes() {
    this.pendientes.textContent = `Tareas pendientes: ${this.manager.obtenerPendientes()}`;
  }

  limpiarFormulario() {
    this.nombre.value = "";
    this.prioridad.value = "Media";
    this.vencimiento.value = "";
  }
}
