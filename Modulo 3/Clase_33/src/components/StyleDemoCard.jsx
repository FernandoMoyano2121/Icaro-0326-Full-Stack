import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const StyleDemoCard = ({ darkMode }) => {
  return (
    <Card>
      <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
        <Stack spacing={3}>
          <Stack
            alignItems={{ xs: "flexStart", sm: "row" }}
            direction={{ xs: "column", sm: "center" }}
            justifyContent="space-between"
            spacing={1.5}
          >
            <Box>
              <Typography variant="h5" fontWeight={750}>
                Panel de ejemplo
              </Typography>
              <Typography sx={{ mt: 0.5 }}>
                Los estilos se actualizan al cambiar el tema.
              </Typography>
            </Box>
            <Chip
              label={darkMode ? "Tema oscuro activo" : "Tema claro activo"}
              color="secondary"
              variant="outlined"
            ></Chip>
          </Stack>

          <TextField
            label="Tu nombre"
            placeholder="Escribí tu nombre"
            helperText="Este campo también recibe el estilo del tema."
            fullWidth
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Button variant="contained" color="primary" size="large">
              Acción principal
            </Button>
            <Button variant="outlined" color="secondary" size="large">
              Acción secundaria
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StyleDemoCard;
