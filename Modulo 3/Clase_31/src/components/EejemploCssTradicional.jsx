import "./ejemploCssTradicional.css";

export const CardTradicional = () => {
  return (
    <div className="card">
      <h2 className="card-titulo">Card con CSS tradicional</h2>
      <p className="card-texto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio
        minima temporibus facere. Quaerat, nemo?
      </p>
      <button className="card-boton">Ver Más</button>
    </div>
  );
};

export const EejemploCssTradicional = () => {
  return (
    <div className="ejemplo-css-container">
      <header className="ejemplo-header">
        <h1>Ejemplo 2 CSS tradicional</h1>
      </header>
      <main className="ejemplo-main">
        <section className="ejemplo-seccion">
          <CardTradicional />
        </section>
      </main>
    </div>
  );
};
