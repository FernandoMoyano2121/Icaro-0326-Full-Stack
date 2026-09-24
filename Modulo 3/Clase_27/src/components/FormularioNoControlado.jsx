import React, { useRef } from "react";

export const FormularioNoControlado = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form>
      <div>
        <label>Nombre</label>
      </div>
      <br />
      <input ref={inputRef} type="text" placeholder="Ingresa tu nombre" />
      <br />
      <br />
      <div>
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </form>
  );
};
