import { Link } from "react-router-dom";
import { Carrito } from "../components/Carrito";

export const CarritoPage = () => {
  return (
    <div>
      <h2>Mi Carrito</h2>
      <Link to="/"> ← Seguir comprando </Link>
      <Carrito />
    </div>
  );
};
