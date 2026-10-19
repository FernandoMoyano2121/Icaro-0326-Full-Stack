import { useState } from "react";
import { createAppTheme } from "./theme";
import { Box, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { PageHeader } from "./components/PageHeader";
import StyleDemoCard from "./components/styleDemoCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createAppTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          p: { xs: 2, sm: 4 },
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(circle at top left, rgba(49, 87, 200, 0.2), transparent 38%)"
              : "radial-gradient(circle at top left, rgba(49, 87, 200, 0.12), transparent 38%)",
        }}
      >
        <Stack spacing={4} sx={{ width: "min(100%, 760px)" }}>
          <PageHeader darkMode={darkMode} onThemeChange={setDarkMode} />
          <StyleDemoCard darkMode={darkMode} />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
