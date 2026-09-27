import { useFetch } from "../hooks/useFetch";

export const ListadoUsuarios = () => {
  const { datos, cargando, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul>
        {datos.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
};
