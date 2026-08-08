/* 
function nombreFuncion(){
...Código a ejecutar
}
*/

/* Invocación */
/* nombreFuncion() */

/**
 * @description Funcion que imprime una cadena de texto por alert
 * @param {string} mensaje
 */
/* function saludar(mensaje) {
  alert(mensaje);
}

saludar("Hola Alumnos"); */

/**
 * @description Funcion que suma dos números
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
/* function sumar(a, b) {
  return a + b;
}

const resultado = sumar(10, 20);
console.log(resultado); */

/* function sumar() {
  let numero = 5;
}

console.log(numero);

sumar(); */

/* function saludar() {
  function nombre() {
    return "Alvaro";
  }
  console.log("Hola" + nombre());
}

saludar(); */

/* const sumar = function (a, b) {
  return a + b;
};

const resultado = sumar(6, 10);
console.log(resultado);
 */

/* function operacion(a, b, fn) {
  return fn(a, b);
}

function sumar(a, b) {
  return a + b;
}

console.log(operacion(5, 8, sumar)); */

/* function sumar(a, b) {
  return a + b;
}

const sumar = function (a, b) {
  return a + b;
};
 */
/* const sumar = (a, b) => a + b; */

let tareas = "";
let numeroTarea = 0;

function mostrarMenuDeOpciones() {
  return parseInt(
    prompt(
      "Ingresa una opcion para continuar: \n 1. Ingresa una nueva tarea\n 2.Ver mis tareas.\n 3.Salir\n",
    ),
  );
}

function agregarTarea() {
  let nuevaTarea = prompt("Ingresa la tarea");

  if (nuevaTarea && isNaN(nuevaTarea) && nuevaTarea != "") {
    numeroTarea++;
    tareas += `${numeroTarea}.${nuevaTarea.trim()}\n`;
    alert("✅Tarea agregada exitosamente! ");
  } else {
    alert("❌El formato ingresado no es valido");
  }
}

function mostrarTareas() {
  if (numeroTarea == 0) {
    alert("No tenés tareas agregadas");
  } else {
    alert(`LISTADO DE TAREAS: \n${tareas}`);
  }
}

function main() {
  let eleccionUsuario = mostrarMenuDeOpciones();

  //Posible validación
  while (eleccionUsuario !== 3) {
    switch (eleccionUsuario) {
      case 1:
        agregarTarea();
        break;
      case 2:
        mostrarTareas();
        break;
    }
    eleccionUsuario = mostrarMenuDeOpciones();
  }
  alert("Adios! Te esperamos pronto!! ");
}

main();
