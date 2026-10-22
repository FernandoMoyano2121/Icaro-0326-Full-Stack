import { Link, useSearchParams } from "react-router-dom";
import { useCarritoStore } from "../store/carritoStore";
import { useFetch } from "../hooks/useFetch";
import { Header } from "../components/Header";

export const ProductoDetalle = () => {
  // useSearchParams devuelve un arreglo con los parámetros actuales
  // y una función para modificarlos; aquí tomamos solo los parámetros.
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const API_URL = `https://fakestoreapi.com/products/${id}`;

  const agregarProducto = useCarritoStore((state) => state.agregarProductos);

  // Renombra localmente la propiedad data como producto para usar un nombre más claro en esta página;
  // el nombre de la propiedad del objeto devuelto por useFetch no se modifica.
  const { data: producto, loading, error } = useFetch(API_URL);

  if (!id) {
    return (
      <div>
        <p>No se especifico ningun producto </p>
        <Link to="/">← Volver al listado</Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error al cargar el producto: {error}</p>
        <Link to="/">← Volver al listado</Link>
      </div>
    );
  }

  return (
    <div>
      {/* AGREGADO: Header compartido, igual que en ProductosPage, con badge reactivo */}
      <Header />
      {/* Enlace para volver al listado */}
      <Link to="/">← Volver al listado</Link>

      <div>
        {/* La API devuelve una URL de imagen en producto.image */}
        <img src={producto.image} alt={producto.title} />

        <div>
          <p>{producto.title}</p>
          <p>${producto.price}</p>

          <span>{producto.category}</span>

          <p>{producto.description}</p>

          <p>
            ⭐ {producto.rating.rate} / 5 &nbsp;·&nbsp; {producto.rating.count}{" "}
            reseñas
          </p>

          <button
            onClick={() =>
              agregarProducto({
                id: producto.id,
                nombre: producto.title,
                precio: producto.price,
              })
            }
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
