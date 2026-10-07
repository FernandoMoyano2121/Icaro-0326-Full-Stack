import { useTemaStore } from "../stores/temaStore";

function BotonTema() {
  const { darkMode, toggleTema } = useTemaStore();

  return (
    <button onClick={toggleTema} style={styles.botonTema(darkMode)}>
      {darkMode ? "☀️Modo Claro" : "🌙Modo Oscuro"}
    </button>
  );
}

function Header() {
  const darkMode = useTemaStore((state) => state.darkMode);
  return (
    <header style={styles.header(darkMode)}>
      <h2>Mi Aplicación</h2>
      <BotonTema />
    </header>
  );
}

function CardEjemplo() {
  const darkMode = useTemaStore((state) => state.darkMode);

  return (
    <div style={styles.card(darkMode)}>
      <h4 style={styles.cardTitulo(darkMode)}>Titulo de mi Tarjeta</h4>
      <p style={styles.cardContenido(darkMode)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nobis.
      </p>
    </div>
  );
}

export function TemaApp() {
  const darkMode = useTemaStore((state) => state.darkMode);

  return (
    <div style={styles.container(darkMode)}>
      <Header />
      <br />
      <br />

      <div style={styles.cardsGrid}>
        {/* Tarjetas */}
        <CardEjemplo />
        <CardEjemplo />
        <CardEjemplo />
      </div>
    </div>
  );
}

/* Objetos de estilo */
const styles = {
  container: (dark) => ({
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    minHeight: "100vh",
    background: dark ? "#1a1a2e" : "#f8f9fa",
    transition: "background 0.3s ease",
    fontFamily: "Arial sans-serif",
  }),

  header: (dark) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: dark ? "#1a1a2e" : "#f8f9fa",
    color: dark ? "#fff" : "#333",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  }),
  botonTema: (dark) => ({
    padding: "10px 20px",
    border: "none",
    borderRadius: "20px",
    background: dark ? "#e94560" : "#007bff",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.3s ease",
  }),

  main: {
    padding: "30px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  titulo: (dark) => ({
    color: dark ? "#fff" : "#333",
    marginBottom: "15px",
  }),
  texto: (dark) => ({
    color: dark ? "#ccc" : "#666",
    lineHeight: "1.6",
    marginBottom: "20px",
  }),
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginBottom: "20px",
  },
  card: (dark) => ({
    padding: "20px",
    borderRadius: "10px",
    background: dark ? "#0f3460" : "#fff",
    boxShadow: dark
      ? "0 4px 15px rgba(0,0,0,0.3)"
      : "0 2px 10px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  }),
  cardTitulo: (dark) => ({
    margin: "0 0 10px 0",
    color: dark ? "#e94560" : "#007bff",
  }),
  cardContenido: (dark) => ({
    margin: 0,
    color: dark ? "#ccc" : "#666",
    fontSize: "14px",
  }),
};
