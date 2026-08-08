// Array
//[ tipo de dato lmacenado ]

/* const miArray = [1, 2, 3, 4, 5];
const letras = ["a", "b", "c"]; */

//Impresion en consola
/* console.log(miArray);
console.log(miArray.length); */

//Accediendo a los elementos
/* let elementoDos = letras[1];
console.log(elementoDos); */

//Recorrer el array

//FOR
/* for (let index = 0; index < miArray.length; index++) {
  const element = miArray[index];
  console.log(element);
} */

//FOR OF

//for(libro of libros)
//for(alumno of alumnos)
/* for (const element of miArray) {
  console.log(element);
}
 */
/*
const elemento1 = miArray[0];
const elemento2 = miArray[1];
const elemento3 = miArray[2];
const elemento4 = miArray[3];
const elemento5 = miArray[4];
*/

//----------------------------------------------------------
//            METODOS QUE MODIFICAN EL ARRAY ORIGINAL
//----------------------------------------------------------
//----------------------------------------------------------
//                          PUSH()
//----------------------------------------------------------

// ARRAY ORIGINAL
/* const nombres = ["Fernando", "Luciano", "Celina", "Victoria"]; */

/*console.log(nombres);
const nuevaLongitudDeMiArray = nombres.push("Emiliano");
console.log(nuevaLongitudDeMiArray); */

//----------------------------------------------------------
//                          POP()
//----------------------------------------------------------

/* const elementoEliminado = nombres.pop();
console.log(nombres);
console.log(elementoEliminado); */

//----------------------------------------------------------
//                          SHIFT()
//----------------------------------------------------------

/* const primerElementoEliminado = nombres.shift();
console.log(nombres);
console.log(primerElementoEliminado); */

//--------------------------------------------------------
//                        UNSHIFT()
//--------------------------------------------------------

/* const nuevaLongitudDelArray = nombres.unshift("Juan");
console.log(nombres);
console.log(nuevaLongitudDelArray); */

//------------------------------------------------------
//                       SPLICE()
//------------------------------------------------------

/* const elementoRemovido = nombres.splice(1, 1);
console.log(elementoRemovido); */

//------------------------------------------------------
//                       CONCAT()
//------------------------------------------------------

/* const nombres = ["Fernando", "Luciano", "Celina", "Victoria"];

const listado1 = ["Fernando", "Luciano"];
const listado2 = ["Celina", "Victoria"];

console.log(listado1.concat(listado2));

const listado3 = listado1.concat(listado2);
console.log(listado3); */

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns
 */
/* function sumar(a, b) {
  return a + b;
} */

/**
 *
 * @param {number} a
 * @param {numbers} b
 * @returns
 */
/* function restar(a, b) {
  return a - b;
}
 */
/**
 *
 * @param {number} a
 * @param {number} b
 * @param {function} fn
 * @returns
 */
/* function operar(a, b, fn) {
  return fn(a, b);
}

console.log(operar(9, 8, restar)); */

//----------------------------------------------------------
//            METODOS QUE DEVUELVEN UN NUEVO ARRAY
//----------------------------------------------------------
//-------------------------------------------------------
//                          FOREACH()
//--------------------------------------------------------

const nombres = ["Fernando", "Luciano", "Celina", "Victoria"];

/* function miForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
}

miForEach(nombres, (elemento, indice) => {
  console.log(`elemento: ${elemento} - indice: ${indice}`);
});
 */

/* nombres.forEach((elemento) => {
  console.log(`elemento: ${elemento}`);
}); */

//----------------------------------------------------------
//                        FIND()
//----------------------------------------------------------

/* const productos[{},{},{}] */
/* const numeros = [1, 2, 3, 4, 5];

const mayorACinco = numeros.find((numero) => numero < 5);
console.log(mayorACinco);
 */

//------------------------------------------------------------
//                        FILTER()
//------------------------------------------------------------

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const numerosMayoresA6 = numeros.filter((numero) => numero > 6);
console.log(numerosMayoresA6); */

//------------------------------------------------------------
//                           MAP()
//------------------------------------------------------------
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const numerosMultiplicadosPor2 = numeros.map((numero) => numero * 2);
console.log(numerosMultiplicadosPor2);
