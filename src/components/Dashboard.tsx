import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React, { useReducer } from "react";
import Footer from "./Footer";
import DashTable from "./Table/Table";
import FilterGenre from "./FilterGenre/FilterGenre";
import useJSONPlaceholderAPI from "../hooks/useJSONPlaceholderAPI";
import { dedupedGenres } from "../utils/utils";
import Chart from "./Chart/Chart";

const Dashboard = () => {
  const { albums } = useJSONPlaceholderAPI();

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Filter Input & List */}
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                height: 400,
              }}
            >
              <FilterGenre genres={dedupedGenres(albums)} />
            </Paper>
          </Grid>
          {/* Chart */}
          <Grid item xs={12} md={7} lg={8}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 400,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Table */}
          <Grid item xs={12}>
            <Paper
              sx={{ p: 2, display: "flex", flexDirection: "column", mb: 5 }}
            >
              <DashTable />
            </Paper>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </Box>
  );
};

export default Dashboard;
