/* alert("Hola Alumnos! "); */

/* Declaración de variables con let */
//Construir una variable en dos pasos
//Declarar una variable
let nombre;
//Asigne un valor
nombre = "Ignacio";

/* Uncaught SyntaxError: Identifier 'nombre' has already been declared (at app.js:10:5) */
/* let nombre = "Fernando";
nombre = "Agustin"; */

/* Declaración de variables con const */
/* app.js:16 Uncaught TypeError: Assignment to constant variable.
  at app.js:16:10 */
/* const miNombre = "Lucas";
miNombre = "Juan"; */

/* const tuNombre = "Fabio"; */

/* Operadores aritméticos */
// = Asignación
// + adición
// - Sustracción
// * Multiplicación
// / División
// % Modulo

const edad = 5 * 5;
/* console.log(edad); */

let edad1 = 5;
const edad2 = 5;
let sumaDeEdades = edad1 + edad2;
/* console.log(sumaDeEdades); */

//OPERADORS LOGICOS
// && "Y"
// || "O"

//COMENTARIOS (shift - alt - a)
// Una linea
/* Comentario multilinea*/

let numero = 6;
numero = numero + 3;
numero = numero++;

/* console.log(numero); */

/* 
+= adicion/asignacion
-=
*=
/=
*/
numero += 3;
/* *****************console.log(numero); ***********/

/* ***************Funciones integradas *************/

/* console.log("Hola Alumnos!");
alert("Chau Alumnos!");
prompt("Hola Alumnos"); */

/* const apellido = prompt("Ingresa tu Apellido");
console.log(apellido); */

const numero1 = parseInt(prompt("Ingresa el primer numero"));
console.log(numero1);

const numero2 = parseInt(prompt("Ingresa el segundo numero"));
console.log(numero2);

console.log(numero1 + numero2);

const esMayorDeEdad = true;

/* Tipos de datos primitivos

- number numerico
- string Cadena de caracteres
- boolean verdadero o falso
- null
- undefined
- bigint

*/
