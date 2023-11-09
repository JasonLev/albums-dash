import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, bgcolor: "lightgrey" }}
    >
      <Typography
        align="center"
        variant="body2"
        color="text.secondary"
        pb={2}
        pt={2}
      >
        {"Made with "}
        <span>&#10084;</span>
        {" by "}
        <Link color="inherit" href="https://github.com/JasonLev">
          Jason Levy
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </AppBar>
  );
};

export default Footer;
