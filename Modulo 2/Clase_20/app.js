const parrafo = document.querySelector("p");
console.log(parrafo.nodeType); //ELEMENT_NODE - 1

console.log(parrafo.firstChild.nodeType); //TEXT-NODE -3
console.log(parrafo.textContent);

/* ******* CREAR ELEMENTOS DINAMICAMENTE *********/

const p = document.createElement("p");
const contenedor = document.getElementById("contenedor");

p.textContent = "Texto de mi parrafo";
p.classList.add("parrafo");

contenedor.appendChild(p);

/* ************* CLONAR UN ELEMENTO ************/

const parrafoClonado = p.cloneNode(true);
contenedor.appendChild(parrafoClonado);

/* ************* INSERTAR UN NODO HIJO  ************/

const titulo = document.getElementById("titulo");
const nuevoElemento = document.createElement("h3");

nuevoElemento.textContent = "Este es un nuevo encabezado";

titulo.insertBefore(nuevoElemento, titulo.firstChild);

/* **************** ELIMINAR NODO HIJO ***************/

contenedor.removeChild(parrafoClonado);

/* **************** innerHTML VS createElement() ***************/

/* Sujeto a XSS - Problemas de seguridad */
const div = document.getElementById("innerHtml");
div.innerHTML = "<p>Texto agregado mediante innerHTML</p>";

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "texto del elemento creado con createElement()";
div.appendChild(nuevoParrafo);
