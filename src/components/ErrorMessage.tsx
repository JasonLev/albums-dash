import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const ErrorMessage = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <p>Something went wrong!</p>
            <p>No albums to show.</p>
          </Alert>
        </Box>
      </Container>
    </>
  );
};

export default ErrorMessage;
