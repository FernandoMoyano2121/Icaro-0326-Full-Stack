import styles from "./EjemploCssModules.module.css";

export const CardModule = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitulo}> Card con CSS Module</h2>
      <p className={styles.cardTexto}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem culpa
        dolorem facilis, quo quas!
      </p>
      <button className={styles.cardBoton}>ver más</button>
    </div>
  );
};

export const EjemploCssModules = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Ejemplo con CSS Modules</h1>
        <p>Archivos .module.css tienen scope local automatico</p>
      </header>
      <main className={styles.main}>
        <CardModule />
      </main>
    </div>
  );
};
