const persona = {
  nombre: "Mario",
  nacionalidad: "Argentina",

  comunicar: function () {
    console.log("Hola Alumnos! ");
  },
};

//**************** Funcion constructora ***********************

/*
 function Persona(nombre, nacionalidad) {
  this.nombre = nombre;
  this.nacionalidad = nacionalidad;
}
const persona1 = new Persona();
*/

//**********************SINTAXIS DE CLASE - class

/* class Persona {
  //Metodo constructor
  constructor(nombre, nacionalidad) {
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
  }

  comunicar() {
    console.log(`Hola soy ${this.nombre}`);
  }
} */

//Instancia de la clase

/* const persona1 = new Persona("Mariana", "Argentina");
console.log(persona1);
persona1.comunicar(); */

/* ****************** HERENCIA **************************/

/* 
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  emitirSonido() {
    console.log(`${this.nombre} hace un sonido`);
  }
}

class Perro extends Animal {
  emitirSonido() {
    console.log(`${this.nombre} ladra`);
  }
}

const miPerro = new Perro("Pichichu");
miPerro.emitirSonido(); */

/* ************************SUPER() ************************/

/* class Persona {
  #nombre;
  //Metodo constructor
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.edad = edad;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  comunicar() {
    console.log(`Hola soy ${this.#nombre} y tengo ${this.edad} años`);
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }

  mostrarCurso() {
    console.log(`Estoy estudiando ${this.curso}`);
  }
}

const estudiante = new Estudiante("Ana", 32, "Javascript");
console.log(estudiante.nombre);
estudiante.nombre = "Juan";
console.log(estudiante.nombre);
estudiante.mostrarCurso();
estudiante.comunicar();


 */

class Tarea {
  #titulo;
  #completada;

  constructor(titulo, completada = false) {
    this.#titulo = titulo;
    this.#completada = completada;
  }

  get titulo() {
    return this.#titulo;
  }

  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }
}

class ListaTareas {
  #listado;

  constructor() {
    this.#lista = [];
  }

  agregarTarea(tarea) {
    this.#listado.push(tarea);
  }
}

//Creo tareas
const tarea1 = new Tarea("Lavar la ropa");
const tarea2 = new Tarea("Estudiar Javascript");

//Creo el listado de tareas
const listadoDeTareas = new ListaTareas();

listadoDeTareas.agregarTarea(tarea1);
