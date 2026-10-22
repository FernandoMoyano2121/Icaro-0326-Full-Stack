import { useCarritoStore } from "../store/carritoStore";

export const Carrito = () => {
  const items = useCarritoStore((state) => state.items);
  const eliminarProducto = useCarritoStore((state) => state.eliminarProducto);
  const actualizarCantidad = useCarritoStore(
    (state) => state.actualizarCantidad,
  );
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito);
  const getTotalItems = useCarritoStore((state) => state.getTotalItems);
  const getTotalPrecio = useCarritoStore((state) => state.getTotalPrecio);

  if (items.length === 0) {
    return (
      <>
        <div>
          <h3>🛒Tu Carrito</h3>
          <p>El carrito está vacio</p>
        </div>
      </>
    );
  }

  return (
    <div>
      <h3>🛒Tu carrito ({getTotalItems()}items) </h3>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.nombre}</span>
          <button
            onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
          >
            -
          </button>
          <span>{item.cantidad}</span>
          <button
            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
          >
            +
          </button>
          <span>{item.cantidad * item.precio}</span>
          <button onClick={() => eliminarProducto(item.id)}>🗑️</button>
        </div>
      ))}
      <div>
        <strong>Total: ${getTotalPrecio()}</strong>
      </div>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
};
