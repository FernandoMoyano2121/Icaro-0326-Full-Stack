import { useEffect, useState } from "react";

export const ContadorUseEffect = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`Valor actual del contador ${contador}`);
  }, [contador]);

  return (
    <button onClick={() => setContador(contador + 1)}>
      {" "}
      Incrementar :{contador}
    </button>
  );
};
