import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./shared/NavBar";
import { Navegacion } from "./ejemplos/01-navegacion/Navegacion";
import { styles } from "./shared/styles";
import { Footer } from "./shared/Footer";
import { Params } from "./ejemplos/02-params/Params";
import { Protegidas } from "./ejemplos/03-rutas-protegidas/Protegidas";

function App() {
  return (
    <BrowserRouter>
      <div style={styles.container}>
        <header style={styles.header}>
          <h2>Ejemplos de React Router</h2>
        </header>
        <NavBar />

        <main style={styles.main}>
          <Routes>
            <Route path="/navegacion/*" element={<Navegacion />}></Route>
            <Route path="/params/*" element={<Params />}></Route>
            <Route path="/protegidas/*" element={<Protegidas />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
