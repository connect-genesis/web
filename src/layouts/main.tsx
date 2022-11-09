import {
  AppBar,
  Button,
  Typography,
  Stack,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import React, { useEffect } from "react";
import ThemeProvider from "../providers/themeProvider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./layout.css";
import { Header } from "../components/Header";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();

  return (
    <ThemeProvider>
      <Header />
      <Toolbar sx={{ mb: 10 }} />

      <div>{children}</div>
    </ThemeProvider>
  );
};

export default MainLayout;
