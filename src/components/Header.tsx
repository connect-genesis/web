import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Stack,
  Button,
  Container,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu as Menus,
  styled,
  useTheme,
  AppBarProps as MuiAppBarProps,
  IconButton,
  Typography,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { useState } from "react";
import Menubar from "./Menu";
import { Link } from "react-router-dom";
import "../styles/header.css";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        className="main-background"
        sx={{
          height: {
            xs: "70px",
            md: "90px",
          },
          padding: {
            xs: 5,
            md: 15,
          },
          borderRadius: 0,
        }}
        elevation={0}
      >
        <Container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box component="a" display="block">
                <Box
                  component="img"
                  alt="test"
                  src="/logo.png"
                  height={{ xs: 45, md: 55, display: "block" }}
                  width="auto"
                />
              </Box>

              <Box component="a" display="block">
                <Typography className="headerLogoText">
                  Genesis Global
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 5, sm: 6, md: 4 }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Menubar />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <div
                className="htb-button"
                style={{
                  width: "100%",
                }}
              >
                <Button fullWidth variant="contained" size="small">
                  Schedule an appointment
                </Button>
              </div>
            </Box>
          </Stack>
          <>
            <MenuIcon
              onClick={handleDrawerOpen}
              sx={{
                fontSize: 30,
                display: { xs: "flex", md: "none" },
                color: "white",
              }}
            />
          </>
        </Container>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box mr={28}>
              <Box component="a" display="block">
                <Box
                  component="img"
                  alt="Genesis Global"
                  src="/logo.png"
                  height={{ xs: 45, md: 55, display: "block" }}
                  width="auto"
                />
              </Box>
            </Box>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <CloseIcon />
              ) : (
                <KeyboardBackspaceIcon />
              )}
            </IconButton>
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key={"Solutions"} disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemText primary={"Solutions"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"Clients"} disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemText primary={"Clients"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"Projects"} disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemText primary={"Projects"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};
