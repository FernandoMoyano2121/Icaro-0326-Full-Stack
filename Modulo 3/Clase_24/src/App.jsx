/*
export const ComponenteHijo = (props) => {
  return <h2>{props.saludo}</h2>;
};
*/

import { Contador } from "./components/Contador";
import { Saludo } from "./components/Saludo";

export const ComponenteHijo = ({ saludo }) => {
  return <h2>{saludo}</h2>;
};

function App() {
  return (
    <div>
      <ComponenteHijo saludo="Hola como están?" />
      <Saludo nombre="Luis" edad={33} />
      <Contador />
    </div>
  );
}

export default App;
