/* console.log(document);  */

/* console.log(document.body);
console.log(document.doctype);
console.log(document.location);
console.log(document.location.href); */

/* **********************getElementByTagName() **************/

/* const h1 = document.getElementsByTagName("h1");
console.log(h1); */

/* ********************** getElementById() *****************/

/* const titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.textContent); */

/* ********************** getElementByClassName() **************/

/* const parrafo = document.getElementsByClassName("parrafo");
console.log(parrafo); */

/* ********************** querySelector() *****************/

/* const div = document.querySelector("#div"); */
/* const div = document.querySelector(".div"); */
/* const div = document.querySelector("div");*/
/* console.log(div); */

/* ********************** querySelectorAll() *****************/

/* const divs = document.querySelectorAll("div");
console.log(divs.forEach((element) => console.log(element))); */

/* ************** textContent *****************************/

/* const titulo = document.getElementById("titulo");
titulo.textContent = "Hola mis queridos Alumnos!"; */

/* ************** innerHTML *****************************/

/*
const nombre = prompt("Ingresa tu nombre");

function saludar(nombre) {
  const divContenedor = document.getElementById("contenedor");
  divContenedor.innerHTML = `<h3>¿Cómo estás ${nombre}?</h3>`;
}

saludar(nombre);
*/

/* ******************** PRACTICA FINAL *************************/

const descripcion = document.querySelector(".descripcion");
const imagen = document.querySelector("img");

descripcion.textContent =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, perferendis.";
imagen.setAttribute("src", "./img/imagen1.jpg");
