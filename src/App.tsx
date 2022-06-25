import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import { useMemo } from "react";
import { CustomTableWrapper } from "./components/CustomTableWrapper";

import GeschichteForHistory from "geschichte/historyjs";
import { createBrowserHistory } from "history";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <GeschichteForHistory history={createBrowserHistory()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{ padding: 4 }}>
          <CustomTableWrapper />
        </Container>
      </ThemeProvider>
    </GeschichteForHistory>
  );
}

export default App;
