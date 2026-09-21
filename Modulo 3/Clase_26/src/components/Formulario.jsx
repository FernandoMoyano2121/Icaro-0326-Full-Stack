export const Formulario = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados al servidor!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input type="text" placeholder="Ingresa tu nombre" />
        </label>
      </div>
      <br />
      <div>
        <label>
          <input type="number" placeholder="Ingresa tu edad" />
        </label>
      </div>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};
