import { extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        background: {
          default: "#fafafa",
          paper: "#ffffff",
        },
        text: {
          primary: "#111517",
          secondary: "#858585",
        },
        divider: "#858585",
      },
    },
    dark: {
      palette: {
        mode: "dark",
        background: {
          default: "#202c37",
          paper: "#2b3945",
        },
        text: {
          primary: "#ffffff",
          secondary: "#858585",
        },
        divider: "#858585",
      },
    },
  },
  typography: {
    fontFamily: `'Nunito Sans', sans-serif`,
    fontSize: 14,
  },
  colorSchemeSelector: "data-color-scheme",
});

export default theme;
