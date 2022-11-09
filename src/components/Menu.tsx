import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Menubar: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: 15,
        marginRight: 10,
      }}
    >
      <Typography className={"menu_item"}>Solutions</Typography>
      <Typography className={"menu_item"}>Clients</Typography>
      <Typography className={"menu_item"}>Projects</Typography>
    </Box>
  );
};

export default Menubar;
