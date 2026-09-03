/* function saludar(nombre, callback) {
  //Se ejecuta primero el console.log
  console.log(`Hola ${nombre}`);
  //Después se ejecuta el callaback
  callback();
}

function despedir() {
  console.log("Adios!");
}

saludar("Juan", despedir);
//Hola Juan
//Adios!
 */

/* -----------------------PROMESAS-------------------------- */

/* const promesa = new Promise((resolve, reject) => {
  let exito = false;

  if (exito) {
    resolve("Operacion exitosa!");
  } else {
    reject("Error en la operacion");
  }
});

promesa
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error)); */

/* ----------------------------------------------------- */

/* function tarea1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 1 completada"), 1000);
  });
}

function tarea2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 2 completada"), 3000);
  });
}

tarea1()
  .then((resultado1) => {
    console.log(resultado1);
    return tarea2();
  })
  .then((resultado2) => console.log(resultado2))
  .catch((error) => console.log(error)); */

/* ------------------------ASYNC AWAIT---------------------- */

/*
 function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos obtenidos"), 3000);
  });
}

async function ejecutar() {
  console.log("Esperando datos...");
  const resultado = await obtenerDatos();
  console.log(resultado);
}

ejecutar(); */

/* --------------------POKEMON-------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("buscarBtn");

  if (boton) {
    boton.addEventListener("click", buscarPokemon);
  }
});

async function obtenerPokemons(nombre) {
  const respuesta = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`,
  );

  if (!respuesta.ok) {
    throw new Error(`Pokemos ${nombre} no encontrado`);
  }

  const data = respuesta.json();
  return data;
}

/**
 * Busca un pokémon y muestra su información en la página
 * Ejemplo completo de async/await con manejo de errores
 */
async function buscarPokemon() {
  const nombre = document.getElementById("nombrePokemon").value.trim();
  const resultado = document.getElementById("resultado");

  if (!nombre) {
    resultado.textContent = "Por favor, ingresa un nombre de pokémon";
    return;
  }

  resultado.textContent = "🔍 Buscando...";

  try {
    const pokemon = await obtenerPokemons(nombre);

    // Crear elementos del DOM
    const imagen = document.createElement("img");
    imagen.setAttribute("src", pokemon.sprites.front_default);
    imagen.setAttribute("alt", pokemon.name);
    imagen.style.width = "200px";

    const h2 = document.createElement("h2");
    h2.textContent = `${pokemon.name.toUpperCase()}`;

    const peso = document.createElement("p");
    peso.textContent = `Peso: ${pokemon.weight / 10} kg`;

    const altura = document.createElement("p");
    altura.textContent = `Altura: ${pokemon.height / 10} m`;

    const tipo = document.createElement("p");
    const tipos = pokemon.types.map((t) => t.type.name).join(", ");
    tipo.textContent = `Tipo: ${tipos}`;

    // Limpiar y mostrar resultados
    resultado.textContent = "";
    resultado.append(imagen, h2, peso, altura, tipo);
    console.log("✓ Pokémon encontrado:", pokemon.name);
  } catch (error) {
    resultado.textContent = `❌ ${error.message}`;
    console.error("Error en búsqueda:", error);
  }
}
