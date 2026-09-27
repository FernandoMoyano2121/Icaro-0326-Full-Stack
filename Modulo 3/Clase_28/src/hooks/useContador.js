import { useState } from "react";

export const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetear = () => setContador(inicial);

  return { contador, incrementar, decrementar, resetear };
};
