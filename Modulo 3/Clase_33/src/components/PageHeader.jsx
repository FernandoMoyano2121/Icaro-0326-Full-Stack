import { colors, FormControlLabel, Stack, Switch } from "@mui/material";

export const PageHeader = ({ darkMode, onThemeChange }) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems={{ xs: "flex-start", sm: "center" }}
      justifyContent="space-between"
      spacing={2}
    >
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={(event) => onThemeChange(event.target.checked)}
            color="primary"
          ></Switch>
        }
        label={darkMode ? "Modo Oscuro" : "Modo Claro"}
      ></FormControlLabel>
    </Stack>
  );
};
