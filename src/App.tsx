import React, { useReducer } from "react";
import useJSONPlaceholderAPI from "./hooks/useJSONPlaceholderAPI";
import ErrorMessage from "./components/ErrorMessage";
import Dashboard from "./components/Dashboard";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import FilteredGenreList from "./components/FilteredGenreList";
import Grid from "@mui/material/Grid";
import {
  genresReducer,
  GenresContext,
  GenresDispatchContext,
} from "./components/contexts/GenresContext";

function App() {
  const initialGenres: string[] = [];
  const [genres, genreDispatch] = useReducer(genresReducer, initialGenres);
  const { isLoading, isError, albums } = useJSONPlaceholderAPI();
  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <GenresContext.Provider value={genres}>
      <GenresDispatchContext.Provider value={genreDispatch}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} sm={6} md={5}>
                  <Typography variant="h3" component="div">
                    Albums Dashboard
                  </Typography>
                </Grid>
                {albums.length > 0 && (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={7}
                    sx={{
                      textAlign: {
                        xs: "left",
                        sm: "right",
                      },
                    }}
                  >
                    <FilteredGenreList textOnly />
                  </Grid>
                )}
              </Grid>
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
      </GenresDispatchContext.Provider>
    </GenresContext.Provider>
  );
}

export default App;
