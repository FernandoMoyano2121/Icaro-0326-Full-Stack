import Button from "@mui/material/Button";

export const BotonBasico = () => {
  return (
    <div>
      <Button color="success" variant="contained">
        Contained
      </Button>
      <br />
      <br />
      <Button color="error" variant="contained">
        Contained
      </Button>
      <br />
      <br />
      <Button color="secondary" variant="outlined">
        Outlined
      </Button>
    </div>
  );
};
