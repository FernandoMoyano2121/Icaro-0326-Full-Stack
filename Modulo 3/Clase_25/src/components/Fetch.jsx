import { useEffect, useState } from "react";

export const Fetch = () => {
  //Manejo del estado
  const [usuarios, setUsuarios] = useState([]);

  //Manejo de efectos secundarios
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response
        .json()
        .then((data) => setUsuarios(data))
        .catch((error) => console.error(error)),
    );
  }, []);

  //Retorno de jsx
  return (
    <>
      <div>
        <h1>Listado de usuario</h1>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </div>
    </>
  );
};
