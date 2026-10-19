import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export const ComponentesComunes = () => {
  return (
    <div>
      <section>
        <Typography variant="h3" align="center">
          Botones
          <br />
          <br />
        </Typography>
        <Button variant="contained">Boton-1</Button>
      </section>
      <br />
      <br />
      {/* -------------------- */}

      <section>
        <Typography align="center" variant="h3">
          Campo de texto
        </Typography>
        <br />
        <br />
        <TextField
          label="tu consulta"
          helperText=""
          size="small"
          autoFocus="true"
        >
          hola
        </TextField>
      </section>
      <br />
      <br />

      {/* -------------------- */}

      <Typography align="center" variant="h3">
        Cards
      </Typography>
      <br />
      <br />
      <section style={{ display: "flex", gap: "16px" }}>
        <Card sx={{ height: 300, width: 250 }}>
          <CardContent>
            <Typography align="center" variant="h5">
              Titulo de la tarjeta
            </Typography>
            <CardMedia
              component="img"
              image="https://placehold.co/400"
            ></CardMedia>
          </CardContent>
        </Card>
        <Card sx={{ height: 300, width: 250 }}>
          <CardContent>
            <Typography align="center" variant="h5">
              Titulo de la tarjeta
            </Typography>
            <CardMedia
              component="img"
              image="https://placehold.co/400"
            ></CardMedia>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
