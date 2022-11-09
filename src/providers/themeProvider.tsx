import {
  Box,
  Theme,
  CircularProgress,
  ThemeProvider as ThemeProviderMui,
  createTheme,
} from "@mui/material";
import Values from "values.js";
import React, { useEffect, useState } from "react";

import themeFactory from "../config/theme";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    let primaryColor = "#FF5403";
    let secondaryColor = "#16213E";

    const primary = new Values(primaryColor);
    const secondary = new Values(secondaryColor);

    setTheme(
      themeFactory({
        primary: {
          main: primaryColor,
          A100: primary.tint(75).hexString(),
          A200: primary.tint(85).hexString(),
          A400: primary.tint(90).hexString(),
          dark: primary.shade(15).hexString(),
          light: primary.tint(85).hexString(),
        },
        secondary: {
          main: secondaryColor,
          A100: secondary.tint(75).hexString(),
          A200: secondary.tint(85).hexString(),
          A400: secondary.tint(90).hexString(),
          dark: secondary.shade(15).hexString(),
          light: secondary.tint(85).hexString(),
        },
      })
    );

    const root = document.querySelector(":root") as HTMLElement;
    root.style.setProperty("--primary-main", primaryColor);
  }, []);

  return (
    <>
      {!theme && (
        <Box
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
        </Box>
      )}
      {theme && <ThemeProviderMui theme={theme}>{children}</ThemeProviderMui>}
    </>
  );
};

export default ThemeProvider;
