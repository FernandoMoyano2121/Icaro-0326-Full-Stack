export const Saludo = ({ nombre, edad }) => {
  return (
    <div style={{ backgroundColor: "tomato", padding: "1rem" }}>
      <p style={{ color: "white" }}>
        Hola mi nombre es: {nombre} y tengo {edad}
      </p>
    </div>
  );
};
