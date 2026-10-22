import { Link } from "react-router-dom";
import { useCarritoStore } from "../store/carritoStore";

export const Header = () => {
  const totalItems = useCarritoStore((state) =>
    state.items.reduce((total, item) => total + item.cantidad, 0),
  );

  return (
    <div>
      <h2>Mini Ecommerce con Zustand </h2>
      <Link to={"/carrito"}>
        🛒{totalItems > 0 && <span>{totalItems}</span>}
      </Link>
    </div>
  );
};
