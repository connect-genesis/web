import { Grid, Stack, Container, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Logos } from "../components/Logos";
import { InformationCard } from "../components/InformationCard";
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
          fontSize={matches ? 75 : 60}
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
          fontSize={20}
        >
          By taking charge of their business operations, enhancing or creating
          new procedures, <br /> and offering them ongoing improvement, we make
          our clients lives easier
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          className="expert_text"
          fontSize={20}
          sx={{ mt: matches ? 20 : 15 }}
        >
          Experts in
        </Typography>

        <Logos />
      </Container>

      <Container sx={{ mt: 20 }} maxWidth="xl">
        <Typography
          variant="h1"
          className={"text_description_secondary"}
          fontSize={matches ? 40 : 35}
          style={{
            margin: "auto",
            width: matches ? "60%" : "auto",
          }}
        >
          About Genesis Global
        </Typography>

        <Typography className={"text_description_text"} sx={{ mt: 5 }}>
          We work with the best in the business with 100+ marketers, developers,
          and strategists helping achieve client goals.
        </Typography>

        <Box className="home_aboutus_box" sx={{ mt: 10 }}>
          <Typography className={"text_description_box"}>
            Genesis was created with the goal of providing back office support
            to a US-based photographic studio company because this was a special
            procedure that required a lot of technological know-how. The star
            product from Genesis, Genesis Photographic Office 365, is now used
            by numerous photography studios in the United States, Australia, and
            Dubai. Behind the scenes, Genesis is a youthful, talented group with
            the goal of offering universal solutions. Our staff has knowledge
            and experience from several fields. Our staff is made up of
            secretarial, photography, business process outsourcing, and finance
            experts. The Genesis team offers technical help around-the-clock and
            internationally.
          </Typography>

          <Stack
            sx={{ mt: 15 }}
            direction={{ xs: "column", sm: "row", md: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 5, sm: 10, md: 12 }}
          >
            <img src={"/countries/us.png"} alt="United States" />
            <img src={"/countries/sri_lanka.png"} alt="Sri Lanka" />
            <img src={"/countries/ausi.png"} alt="Australia" />
          </Stack>
        </Box>
      </Container>

      <Container sx={{ mt: 20 }} maxWidth="xl">
        <Typography
          variant="h1"
          className={"text_description_secondary"}
          fontSize={matches ? 40 : 35}
          style={{
            margin: "auto",
            width: matches ? "60%" : "auto",
          }}
        >
          Our vision
        </Typography>

        <Typography className={"text_description_text"} sx={{ mt: 5 }}>
          Our vision is to offer comprehensive, environmentally friendly
          solutions that will support all business operations in a paperless
          setting. Our staff has knowledge and experience from several fields.
          Our staff is made up of secretarial, photography, business process
          outsourcing, and finance experts. The Genesis team offers technical
          help around-the-clock and internationally.
        </Typography>
      </Container>

      <Container sx={{ mt: 30 }} maxWidth="lg">
        <Typography
          variant="h1"
          className={"text_description_secondary"}
          fontSize={matches ? 40 : 35}
          style={{
            margin: "auto",
            width: matches ? "60%" : "auto",
          }}
        >
          The solutions we provide
        </Typography>

        <Box sx={{ mt: 20 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 1, md: 2 }}
          >
            {Array.from(Array(2)).map((_, index) => (
              <>
                <Grid item xs={1} sm={1} md={1} sx={{ p: 5, mb: 5 }}>
                  <InformationCard
                    tag="BPM"
                    title="Develop your website from scratch"
                    description="Our IT arm will develop your website from scratch with 
modern and simple custom builds"
                    image="https://get.pxhere.com/photo/laptop-notebook-computer-macbook-mac-work-screen-apple-keyboard-ipad-technology-web-tablet-office-gadget-business-brand-imac-design-multimedia-personal-computer-electronic-device-computer-hardware-personal-computer-hardware-758989.jpg"
                  />
                </Grid>

                <Grid item xs={1} sm={1} md={1} sx={{ p: 5, mb: 5 }}>
                  <InformationCard
                    tag="Photography 365 total solutions"
                    title="Limelight of Genesis"
                    description="Photography 365 total solution is the first and only 
hybrid solution product for professional photographers 
and studio owners across the globe"
                    image="https://get.pxhere.com/photo/macbook-hand-camera-photography-dslr-holding-product-reflex-camera-single-lens-reflex-camera-cameras-optics-1393330.jpg"
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
