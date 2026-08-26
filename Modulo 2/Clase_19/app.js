/* -------------------EVENTO CLICK--------------------- */

/* const button = document.getElementById("button");*/

/* button.addEventListener("click", (evento) => {
  alert("Hola Alumnos! ");
  console.log(evento.target);
});
 */

/* --------------------------------- */

/* const button = document.getElementById("button");

function saludar() {
  alert("Hola Alumnos! ");
}

button.addEventListener("click", saludar); */

/* ---------------EVENTO INPUT ------------------ */

/* const input = document.getElementById("input");

input.addEventListener("input", (evento) => {
  console.log(evento.target.value);
}); */

/* --------------------EVENTO MOUSEOVER----------------------- */

/* const div = document.getElementById("div");

function mouseOver() {
  console.log("Pasando el mouse por encima del div");
}

div.addEventListener("mouseover", mouseOver); */

/* --------------------PREVENTDEFAULT()----------------------- */
/* const formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const datos = new FormData(formulario);

  const nombre = datos.get("nombre");
  const email = datos.get("email");
}); */

/*
  const resultado = document.getElementById("resultado");
  resultado.textContent = `Nombre: ${nombre}\n email: ${email}`;
  */

/*
     document.getElementById("resultado").innerHTML = `
    <div class="resultado">
      <div>Nombre: ${nombre}</div>
      <div>Email: ${email}</div>
    </div>
  `;
   */

/* -------------------- PREVENTDEFAULT() ---------------------- */

const botones = document.querySelectorAll(".btnComprar");
const lista = document.getElementById("listaCompras");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const nombreProducto = boton.dataset.nombre;
    const item = document.createElement("li");
    item.textContent = nombreProducto;

    lista.appendChild(item);
  });
});
