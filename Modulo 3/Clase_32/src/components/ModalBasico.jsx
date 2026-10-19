import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export const ModalBasico = () => {
  const [estadoModal, setEstadoModal] = useState(false);

  const abrirModal = () => {
    setEstadoModal(true);
  };

  const cerrarModal = () => {
    setEstadoModal(false);
  };

  return (
    <div>
      <section>
        <Typography variant="h6">Modal/Dialogo</Typography>
        {/* Boton para abrir el modal */}
        <Button onClick={abrirModal} variant="contained">
          Abrir Modal
        </Button>

        <Dialog maxWidth="xl" fullWidth open={estadoModal}>
          <DialogTitle>Modal de Ejemplo</DialogTitle>
          <DialogContent>
            <Typography>Éste es el contenido</Typography>
            <Button onClick={cerrarModal}>Aceptar</Button>
            <Button onClick={cerrarModal}>Cancelar</Button>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
};
