import { FormularioControlado } from "./components/FormularioControlado";
import { FormularioNoControlado } from "./components/FormularioNoControlado";
import FormularioBasico from "./components/react-hook-form/FormularioBasico";

export const App = () => {
  return (
    <div>
      <div>
        {/*  <FormularioNoControlado /> */}
        {/* <FormularioControlado /> */}
        <FormularioBasico />
      </div>
    </div>
  );
};

export default App;
