/* 
Objeto literal
{
  clave:valor
}
*/

const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "administrativo",

  saludar: function () {
    console.log("Hola soy Juan!");
    console.log(`Tengo ${this.edad} años`);
  },

  /*
    saludar: () => {
    console.log("Hola soy Juan!");
    console.log(this.nombre); //undefined
  },*/
};

//Accediendo a las propiedades de mi objeto
//nombreObjeto.propiedad

/* console.log(persona);
console.log(persona.edad);
console.log(persona.nombre); */

/* console.log(persona["profesion"]); */

//Asignando un nuevo valor
/* persona.edad = 45;
console.log(persona); */

//accediendo a la funcion
/* persona.saludar(); */

//Accediendo solo a las claves de mi objeto

/* console.log(Object.keys(persona)); */

//Accediendo solo a las valorea de mi objeto

/* console.log(Object.values(persona)); */

/* RECORRER LAS CLAVES DE UN OBJETO */
/* const claves = Object.keys(persona);
console.log(claves);

for (let clave of claves) {
  console.log(clave);
} */

//RECORRIENDO EL OBJETO ENTERO

/* for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
} */

/* APLICACION DE TAREAS */

const tareas = [
  { id: 1, titulo: "Lavar ropa", completada: false },
  { id: 2, titulo: "Estudiar", completada: false },
  { id: 3, titulo: "Trabajar", completada: false },
];

let siguienteId = 4;

const listarTareas = () => {
  tareas.forEach((tarea) => {
    console.log(
      `${tarea.id}. ${tarea.titulo} [${tarea.completada ? "x" : ""}]`,
    );
  });
};

const agregarTarea = (titulo) => {
  const nuevaTarea = {
    id: siguienteId++,
    titulo: titulo,
    completada: false,
  };
  tareas.push(nuevaTarea);
};

const completarTarea = (id) => {
  const tarea = tareas.find((tarea) => tarea.id === id);
  if (tarea) {
    tarea.completada = true;
  }
};

const eliminarTarea = (id) => {
  //findIndex devuelve el indice del elemento que cumpla la condicion
  const indice = tareas.findIndex((tarea) => tarea.id === id);
  if (indice >= 0) {
    tareas.splice(indice, 1);
  }
};

console.log("----------LISTADO DE TAREAS-----------------");
listarTareas();

console.log("------------AGREGAR UNA TAREA-------------");
agregarTarea("Comer");
listarTareas();

console.log("------------COMPLETAR UNA TAREA-------------");
completarTarea(4);
listarTareas();

console.log("------------ELIMINAR UNA TAREA-------------");
eliminarTarea(4);
listarTareas();
