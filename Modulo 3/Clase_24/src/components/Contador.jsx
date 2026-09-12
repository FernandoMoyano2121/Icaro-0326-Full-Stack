import { useState } from "react";

export const Contador = () => {
  /* const [estadoInicial, funcion que modifica el estado] = useState(valorInicial); */

  const [numero, setNumero] = useState(0);

  /*
    const handleIncrement = () => {
    setNumero(numero + 1);
  };
  */

  /*   const handleIncrement = () => {
    setNumero((numeroAnterior) => numeroAnterior + 1);
  }; */

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <h2>Contador comienza en: {numero}</h2>
      <button onClick={() => setNumero(numero + 1)}>+1</button> */}

      {/* <h2>Contador comienza en: {numero}</h2>
      <button onClick={handleIncrement}>+1</button> */}

      <div>
        <h2>Contador comienza en: {numero}</h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <button onClick={() => setNumero(numero - 1)}>Decrementar</button>
        <button onClick={() => setNumero(0)}>Reset</button>
        <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
      </div>
    </div>
  );
};
