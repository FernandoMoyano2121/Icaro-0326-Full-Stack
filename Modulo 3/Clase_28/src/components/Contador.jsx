import { useContador } from "../hooks/useContador";

export const Contador = () => {
  const { contador, incrementar, decrementar, resetear } = useContador(0);
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={decrementar}>-1</button>
      <button onClick={resetear}>Resetear</button>
      <button onClick={incrementar}>+1</button>
    </div>
  );
};
