import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductosPage } from "./pages/ProductosPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductoDetalle } from "./pages/ProductoDetalle";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductosPage />}></Route>
          <Route path="/carrito" element={<CarritoPage />}></Route>
          <Route path="/producto" element={<ProductoDetalle />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
