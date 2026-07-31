/* ****************************** FOR *****************************/
/*
 for(inicializacion; condicion; actualización){} 
 ...codigo a ejectuar
*/

/* for (let i = 1; i <= 10; i++) {
  console.log(i);
} */

/* ****************** TABLA DE MULTIPLICAR CON FOR *******************/

/*
let numeroIngresado = parseInt(prompt("Ingresa un numero"));

 for (let i = 1; i <= 10; i++) {
  let tabla = numeroIngresado * i;
    console.log(
    "el numero " + numeroIngresado + " multiplicado X " + i + " = " + tabla,
  );
  console.log(`El numero ${numeroIngresado} multiplicado X ${i} es = ${tala}`);
}
 */

/* ************************ WHILE *****************************/

/*
 while (condition) {
  
}
*/

/*
 let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}
*/

/* ************************BREAK *********************************/

/* let i = 0;

while (i < 5) {
  if (i === 3) {
    console.log("A mitad del bucle");
    break;
  }
  console.log(i);
  i++;
}
 */

/* ****************************** CONTINUE **************************/

/* for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}
 */

/* let i = 0;

do {
  console.log("Iteracion numero " + i);
  i++;
} while (i < 5);
 */

/* ************* ADIVINA EL NUMERO SECRETO **************/

// Entrada = Numero ingresado por el usuario para adivinar el n secreto

//Proceso
//  if()
// for() while()
// variable1 numeroSecreto
// variable2 numero Ingresado por el usuario
// variable3 intentos posibles del usuario

//Salida
//alert()
//console.log()

let numeroSecreto = 8;
let intentosTotales = 3;

for (
  let intentosUsuario = 1;
  intentosUsuario <= intentosTotales;
  intentosUsuario++
) {
  let eleccionUsuario = parseInt(
    prompt("Ingresa un numero para adivinar el secreto"),
  );

  if (eleccionUsuario === numeroSecreto) {
    alert("ADIVINASTE !!!");
    break;
  }

  if (eleccionUsuario !== numeroSecreto) {
    alert("No adivinaste, conitnua intentando");
  }

  if (intentosUsuario === intentosTotales) {
    alert(`No lograste adivinar el numero, el numero era ${numeroSecreto}`);
    break;
  }

  alert(`Llevas ${intentosUsuario} intento/s`);
}
