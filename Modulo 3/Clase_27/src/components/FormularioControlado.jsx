import React, { useState } from "react";

export const FormularioControlado = () => {
  const [nombre, setNombre] = useState("");
  /*  const [password, setPassword] = useState(""); */
  const [email, setEmail] = useState("");

  /*   const validarInput = () => {
    if (!nombre) {
      alert("Este campo es obligatorio");
    }
  }; */

  const handleSubmit = (evento) => {
    evento.preventDefault();

    /*  if (!nombre || !password) {
      alert("Los campos son obligatorios");
    } */
    console.log(nombre, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre: </label>
      <input
        value={nombre}
        type="text"
        placeholder="Ingresa tu nombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <br />
      {/*      <div>
        <label>Password: </label>
        <input
          value={password}
          type="password"
          placeholder="Ingresa tu contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div> */}
      <label>Email: </label>
      <input
        value={email}
        type="email"
        placeholder="Ingresa tu email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};
