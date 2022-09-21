import '../styles/globals.css'
import React from "react";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { UIContext } from "../contexts/UIContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#328C83",
    },
    secondary: {
      main: "#f27166",
    },
    error: {
      main: "#F23838",
    },
    info: {
      main: "#D9C5AD",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    htmlFontSize: 16,
    h1: {
      fontSize: "7rem",
      fontWeight: 600,
      lineHeight: 1.31,
    },
    h2: {
      fontWeight: 900,
    },
    h3: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 700,
      fontSize: "1.2rem",
    },
    overline: {
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [uiState, setUIState] = React.useState({ reports: "Organics" });
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <SessionProvider session={session}>
          <UIContext.Provider value={[uiState, setUIState]}>
            <Layout>
              <NavBar />
              <Component {...pageProps} />
            </Layout>
          </UIContext.Provider>
        </SessionProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default MyApp
