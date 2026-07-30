/*1) 
if(condicion){
 ...codigo a ejecutar
}
*/

/*2)
 if(condicion){
 ...código a ejecutar si la condicion es verdadera
 }else{
  ...código a ejecutar si la condicion es falsa
}
*/

/*3)
 if(condición1){
 ...código a ejecutar si la condicion es verdadera
 }else if(condición2){
  ...código a ejecutar si la condicion es falsa
 }else{
    ...código a ejecutar si ninguna de las condiciones es verdadera
}
*/
/* console.log("Esto se mustra antes del if");

/* -------------------------------------------- */

/*let edad = 18;
if (edad < 16) {
  console.log("No pode ingresar!");
} else if (edad < 18) {
  console.log("Podes ingresar solo con el permiso de tus padres");
} else {
  console.log("Sos mayor de edad, podés ingresar!");
}

console.log("Esto se mustra despues del if"); */

/* ------------------------------------------------ */

/* let numero1 = "5";
let numero2 = 5;

console.log(typeof numero1);
console.log(typeof numero2);

if (numero1 === numero2) {
  console.log("los tipos datos son iguales");
}
*/

/* let edad = prompt("Por favor ingresa tu edad");
console.log(typeof edad); */

/* ------------------------------------ */

/* let estaRegistrado = false;
let edad = 20;

if (!estaRegistrado && edad > 18) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}
 */

//condicion ? valor_si_es_verdadera : valor_si_es_falsa

/* let edad = 18;

let esMayor = edad >= 18 ? "Sos mayor" : "Eres menor de edad";
console.log(esMayor);
console.log(edad >= 18 ? "Sos mayor" : "Eres menor de edad"); */

/* -------------------------------------------- */

/* let dia = "Jueves";

switch (dia) {
  case "Lunes":
    break;
  case "Martes":
    console.log("Es Martes!");
    break;
  case "Miercoles":
    break;
  default:
    console.log("Es cualquier otro dia!");
} */

/* ------------------------------------- */

/* esMayor = true;
estaRegistrado = false;
*/

let edad = parseInt(prompt("Ingresa tu edad"));
let tieneLicencia = prompt("Tienes Licencia de conducír (SI/NO)").toUpperCase();

if (edad > 18 && tieneLicencia === "SI") {
  console.log("puedes conducir");
} else {
  console.log("no puedes conducir");
}
