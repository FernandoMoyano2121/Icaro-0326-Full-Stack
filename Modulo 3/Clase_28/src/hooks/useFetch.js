import { useEffect, useState } from "react";

export const useFetch = (url) => {
  //Manejo de estados
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setDatos(resultado);
      } catch (error) {
        console.error(error);
        setError("Error al cargar datos");
      } finally {
        setCargando(false);
      }
    };
    obtenerDatos();
  }, [url]);

  return { datos, cargando, error };
};
