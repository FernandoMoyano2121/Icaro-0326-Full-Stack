//------------------ Array----------------------------
//[ tipo de dato lmacenado ]

const miArray = [1, 2, 3, 4, 5];
const letras = ["a", "b", "c"];

//----------------Impresion en consola-------------------

console.log(miArray);
console.log(miArray.length);

//------------Accediendo a los elementos--------------------

/* let elementoDos = letras[1];
console.log(elementoDos); */

//-------------------Recorrer el array------------------------

//FOR
for (let index = 0; index < miArray.length; index++) {
  const element = miArray[index];
  console.log(element);
}

//FOR OF

//for(libro of libros)
//for(alumno of alumnos)
for (const element of miArray) {
  console.log(element);
}

const elemento1 = miArray[0];
const elemento2 = miArray[1];
const elemento3 = miArray[2];
const elemento4 = miArray[3];
const elemento5 = miArray[4];

//----------------------------------------------------------
//            METODOS QUE MODIFICAN EL ARRAY ORIGINAL
//----------------------------------------------------------

//----------------------------------------------------------
//                          PUSH()
//----------------------------------------------------------
// Parámetros: ...elementos (T[]), uno o más valores del tipo T almacenado en el array.
// Retorna: number, la nueva longitud del array. Modifica el array original.

// ARRAY ORIGINAL
const nombres = ["Fernando", "Luciano", "Celina", "Victoria"];

console.log(nombres);
const nuevaLongitudDeMiArray = nombres.push("Emiliano");
console.log(nuevaLongitudDeMiArray);

//----------------------------------------------------------
//                          POP()
//----------------------------------------------------------
// Parámetros: ninguno.
// Retorna: T | undefined, el último elemento o undefined si está vacío. Modifica el array original.

const elementoEliminado = nombres.pop();
console.log(nombres);
console.log(elementoEliminado);

//----------------------------------------------------------
//                          SHIFT()
//----------------------------------------------------------
// Parámetros: ninguno.
// Retorna: T | undefined, el primer elemento o undefined si está vacío. Modifica el array original.

const primerElementoEliminado = nombres.shift();
console.log(nombres);
console.log(primerElementoEliminado);

//--------------------------------------------------------
//                        UNSHIFT()
//--------------------------------------------------------
// Parámetros: ...elementos (T[]), uno o más valores del tipo T almacenado en el array.
// Retorna: number, la nueva longitud del array. Modifica el array original.

const nuevaLongitudDelArray = nombres.unshift("Juan");
console.log(nombres);
console.log(nuevaLongitudDelArray);

//------------------------------------------------------
//                       SPLICE()
//------------------------------------------------------
// Parámetros: start (number), deleteCount (number, opcional) y ...elementos (T[]) para insertar.
// Retorna: T[], un array con los elementos eliminados. Modifica el array original.

const elementoRemovido = nombres.splice(1, 1);
console.log(elementoRemovido);

//------------------------------------------------------
//                       CONCAT()
//------------------------------------------------------
// Parámetros: ...valores, uno o más elementos T o arrays de T para concatenar.
// Retorna: T[], un nuevo array con los elementos unidos; no modifica los arrays originales.

/* const nombres = ["Fernando", "Luciano", "Celina", "Victoria"];*/

/* const listado1 = ["Fernando", "Luciano"];
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
//        METODOS DE RECORRIDO, BUSQUEDA Y TRANSFORMACION
//----------------------------------------------------------

//-------------------------------------------------------
//                    FOREACH CASERO()
//--------------------------------------------------------
// Parámetros: array (T[]) y callback (función (elemento: T, indice: number, array: T[]) => void).
// Retorna: undefined; ejecuta el callback una vez por cada elemento.

const listadoDeNombres = ["Fernando", "Luciano", "Celina", "Victoria"];

function miForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
}

miForEach(listadoDeNombres, (elemento, indice) => {
  console.log(`elemento: ${elemento} - indice: ${indice}`);
});

/* -------------------------FOREACH------------------------- */
// Parámetros: callback (función (elemento: T, indice: number, array: T[]) => void) y thisArg (any, opcional).
// Retorna: undefined; ejecuta el callback una vez por cada elemento.

listadoDeNombres.forEach((elemento) => {
  console.log(`elemento: ${elemento}`);
});

//----------------------------------------------------------
//                        FIND()
//----------------------------------------------------------
// Parámetros: callback (función (elemento: T, indice: number, array: T[]) => boolean) y thisArg (any, opcional).
// Retorna: T | undefined, el primer elemento que cumple la condición o undefined si no hay coincidencias.

/* const productos[{},{},{}] */
const listadoDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mayorACinco = listadoDeNumeros.find((numero) => numero < 5);
console.log(mayorACinco);

//------------------------------------------------------------
//                        FILTER()
//------------------------------------------------------------
// Parámetros: callback (función (elemento: T, indice: number, array: T[]) => boolean) y thisArg (any, opcional).
// Retorna: T[], un nuevo array con los elementos que cumplen la condición.

const numerosMayoresA6 = listadoDeNumeros.filter((numero) => numero > 6);
console.log(numerosMayoresA6);

//------------------------------------------------------------
//                           MAP()
//------------------------------------------------------------
// Parámetros: callback (función (elemento: T, indice: number, array: T[]) => U) y thisArg (any, opcional).
// Retorna: U[], un nuevo array con los valores devueltos por el callback.

const numerosMultiplicadosPor2 = numeros.map((numero) => numero * 2);
console.log(numerosMultiplicadosPor2);
