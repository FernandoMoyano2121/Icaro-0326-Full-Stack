/* LET */
/* DECLARACION DE VARIABLE */
/* let nombre; */
/* ASIGNACION */
/* nombre = "Ignacio"; */

import sumar from "./archivo1.js";
/* import { sumar } from "./archivo1.js"; */

/* ------------- */

/* DECLARACION ASIGNACIÓN */

/* let nombre = "Ignacio"; */

/* REASIGNAR EL VALOR  */
/* nombre = "Carlos"; */

/* CONST */
/* const apellido */
/* Uncaught SyntaxError: Missing initializer in const declaration */

/* const apellido = "Bianchi";
console.log(apellido); */

/* apellido = "Mercado"; */
/* Uncaught TypeError: Assignment to constant variable. */

/* SCOPE */

/* function saludar() {
  const nombre = "Fabio";
  console.log(nombre);
}

saludar();
 */

/* *************** DESESTRUCTURACIÓN DE OBJETOS ***************/

/* const persona = {
  nombre: "Estefenia",
  edad: 20,
}; */

/* console.log(persona.nombre); */

/* const NombreDeLaPersona = persona.nombre;
console.log(NombreDeLaPersona); */

/* const { nombre, edad } = persona;
console.log(nombre, edad); */

/* const { nombre: NombreDeLaPersona, edad: EdadDeLaPersona } = persona;
console.log(NombreDeLaPersona, EdadDeLaPersona); */

/* ****************DESESTRUCTURACIÓN DE ARRAYS ***************/

/* const numeros = [1, 2, 3, 4];

console.log(numeros[1]); //2

const [uno, dos, , cuarto] = numeros;
console.log(uno, dos, cuarto); */

/* ************** OPERADOR SPREAD ARRAYS **************/

/* const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

const listaCombinada = [...lista1, ...lista2];
console.log(listaCombinada);

console.log(lista1); */

/* ************** OPERADOR SPREAD OBJETOS **************/

/* const persona = { nombre: "Federico", edad: 30 }; */

/* const producto = { nombre: "auto", precio: 500 };

const produtoActualizado = { ...producto, cantidad: 1 };
console.log(produtoActualizado); */

/* ************** TEMPLATE STRINGS **************/

/* let nombre = "Federico";

function saludar() {

  console.log(`Hola ${nombre}`);
}

saludar();
 */
/* ***************** POO ****************/
/* ***************** POLIMORFISMO ****************/

/* class Figura {
  calcularArea() {
    console.log("Calculando el area...");
  }
}

class Rectangulo extends Figura {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super();
    this.radio = radio;
  }

  calcularArea() {
    return Math.round(Math.PI * this.radio ** 2);
  }
} */

/* const rectangulo = new Reactangulo(100, 200);
console.log(rectangulo.calcularArea());

const circulo = new Circulo(300);
console.log(circulo.calcularArea()); */

/* const figuras = [new Rectangulo(100, 200), new Circulo(200)];
figuras.forEach((figura) => console.log(figura.calcularArea())); */

sumar;
const numero1 = parseInt(prompt("Ingresa el primer número"));
const numero2 = parseInt(prompt("Ingresa el segundo número"));
const resultado = sumar(numero1, numero2);

console.log(resultado);
