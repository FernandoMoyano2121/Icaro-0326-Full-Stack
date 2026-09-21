// {
//   mensaje: "Hola alumnos!";
//   nota:9
// }

export const Button1 = ({ mensaje }) => {
  const handleClick = (mensaje) => {
    alert(mensaje);
  };

  return <button onClick={() => handleClick(mensaje)}>Click me</button>;
};
