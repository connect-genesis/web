import { CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import ThemeProvider from "../providers/themeProvider";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./layout.css";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Header />
      <Toolbar sx={{ mb: 10 }} />

      <div>{children}</div>
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;
