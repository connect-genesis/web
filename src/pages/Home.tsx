import { Grid, Stack, Container, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Logos } from "../components/Logos";
import { About } from "../components/About";
import { OurVision } from "../components/Vision";
import { HelpBanner } from "../components/HelpBanner";
import "../styles/home.css";

export const HomePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Container
        className="main-background"
        maxWidth="xl"
        style={{
          justifyContent: "center",
          textAlign: "center",
          maxWidth: "100%",
          marginTop: matches ? "-5%" : "-10%",
          paddingTop: matches ? 30 : 0,
          paddingBottom: 55,
          border: 0,
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          style={{
            fontWeight: 900,
            color: "white",
            padding: 10,
            paddingTop: matches ? 150 : 100,
            lineHeight: "80px",
          }}
        >
          The key to our success is <br />{" "}
          <span className="gradient_text"> Quality </span>
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          style={{
            color: "white",
            marginTop: 30,
            padding: 10,
            fontWeight: 400,
          }}
        >
          By taking charge of their business operations, enhancing or creating
          new procedures, <br /> and offering them ongoing improvement, we make
          our clients lives easier
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          className="expert_text"
          sx={{ mt: matches ? 20 : 15 }}
        >
          Experts in
        </Typography>

        <Logos />
      </Container>

      <About />

      <OurVision />

      <HelpBanner />
    </>
  );
};
