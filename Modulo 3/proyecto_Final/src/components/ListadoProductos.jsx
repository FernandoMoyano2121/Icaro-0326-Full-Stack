import { useFetch } from "../hooks/useFetch";
import { useCarritoStore } from "../store/carritoStore";
import { Link } from "react-router-dom";

const API_URL = `https://fakestoreapi.com/products`;

export const ListadoProductos = () => {
  const { data: productos, loading, error } = useFetch(API_URL);
  const agregarProductos = useCarritoStore((state) => state.agregarProductos);

  if (loading) {
    return (
      <div>
        <h3>Productos Disponibles</h3>
        <p>Cargando Productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h3>Productos Disponibles</h3>
        <p>Error al cargar los productos</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Productos disponibles</h3>
      <div>
        {productos.map((producto) => (
          <div key={producto.id}>
            <span>{producto.title}</span>
            <span>{producto.price}</span>

            <button>
              <Link to={`/producto?id=${producto.id}`}>Ver Detalle</Link>
            </button>

            <button
              onClick={() =>
                agregarProductos({
                  id: producto.id,
                  nombre: producto.title,
                  precio: producto.price,
                })
              }
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
