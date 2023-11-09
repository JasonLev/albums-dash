import React from "react";
import Typography from "@mui/material/Typography";

type Props = {
  children?: React.ReactNode;
};

const DashHeading = (props: Props) => {
  return (
    <Typography component="h2" variant="h6" color="green" gutterBottom>
      {props.children}
    </Typography>
  );
};

export default DashHeading;
