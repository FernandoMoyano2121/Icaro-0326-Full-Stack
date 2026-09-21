import { useEffect, useState } from "react";

export const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const respuesta = await fetch(
          "https://thronesapi.com/api/v2/Characters/",
        );

        const data = await respuesta.json();
        setPersonajes(data);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerPersonajes();
  }, []);

  return (
    <div>
      <h1>Personajes de Game of Thrones</h1>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {personajes.map((personaje) => (
          <li key={personaje.id}>
            <h3>{personaje.fullName}</h3>
            <img
              style={{ width: "200px" }}
              src={personaje.imageUrl}
              alt={personaje.firstName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
