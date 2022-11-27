import React, { useState } from "react";
import { Box, Popover, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { Stack } from "@mui/system";

const Menubar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: 15,
        marginRight: 10,
      }}
    >
      <Typography
        className={"menu_item"}
        aria-owns={open ? "mouse-over-poover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        component={Link}
        to="solutions"
        style={{ cursor: "pointer" }}
      >
        Solutions
      </Typography>
      <Typography className={"menu_item"}>Clients</Typography>
      <Typography className={"menu_item"}>Projects</Typography>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box
          style={{
            background: "#141F43",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
            padding: 20,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={12}
          >
            <Box>
              <Stack spacing={2}>
                <Typography
                  sx={{ p: 1, color: "white" }}
                  component={Link}
                  style={{ cursor: "pointer" }}
                  to="/solutions#content-writing"
                >
                  Content writing
                </Typography>
                <Typography sx={{ p: 1, color: "white" }}>
                  Web designing
                </Typography>
                <Typography sx={{ p: 1, color: "white" }}>
                  Exclusive photography <br />
                  backend
                </Typography>
              </Stack>
            </Box>

            <Stack spacing={2}>
              <Typography sx={{ p: 1, color: "white" }}>
                BPM services
              </Typography>
              <Typography sx={{ p: 1, color: "white" }}>
                Web maintainence
              </Typography>

              <Typography sx={{ p: 1, color: "white" }}></Typography>
            </Stack>
          </Stack>
        </Box>
      </Popover>
    </Box>
  );
};

export default Menubar;
