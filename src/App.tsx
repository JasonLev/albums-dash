import React from "react";
import useJSONPlaceholderAPI from "./hooks/useJSONPlaceholderAPI";
import ErrorMessage from "./components/ErrorMessage";
import Dashboard from "./components/Dashboard";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const { isLoading, isError } = useJSONPlaceholderAPI();
  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Albums Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        {isLoading ? (
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              height: "100vh",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="inherit" />
            <div>Loading...</div>
          </Box>
        ) : (
          <Dashboard />
        )}
      </Box>
    </>
  );
}

export default App;
