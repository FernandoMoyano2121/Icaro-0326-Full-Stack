export const Button = () => {
  const estiloBoton = {
    backgroundColor: "blue",
    border: "none",
    padding: "10px,20px",
    borderRadius: "4px",
    cursor: "pointer",
    color: "white",
  };

  return (
    <>
      <button style={estiloBoton}>Button</button>
      <br />
      <button
        style={{
          backgroundColor: "blue",
          border: "none",
          padding: "10px, 20px",
          borderRadius: "4px",
          cursor: "pointer",
          color: "white",
        }}
      >
        Button
      </button>
    </>
  );
};
