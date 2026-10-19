import { createTheme } from "@mui/material/styles";

export function createAppTheme(darkMode) {
  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#90caf9" : "#3157c8",
      },
      secondary: {
        main: darkMode ? "#ce93d8" : "#8e24aa",
      },
      background: {
        default: darkMode ? "#10141c" : "#f3f6fc",
        paper: darkMode ? "#1b2230" : "#ffffff",
      },
    },

    shape: {
      borderRadius: 16,
    },
    typography: {
      fontFamily: '"Inter", "Roboto", Arial, sans-serif',
      h1: {
        fontSize: "clamp(2rem, 5vw, 3.25rem)",
        fontWeight: 800,
        letterSpacing: "-0.04em",
      },
      button: {
        fontWeight: 700,
        textTransform: "none",
      },
    },

    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingInline: 20,
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            border: "1px solid",
            borderColor: darkMode
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(49, 87, 200, 0.12)",
            boxShadow: darkMode
              ? "0 18px 45px rgba(0, 0, 0, 0.22)"
              : "0 18px 45px rgba(38, 60, 110, 0.08)",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 12,
            },
          },
        },
      },
    },
  });
}
