import {
  Container,
  Typography,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { InformationCard } from "../InformationCard";
import "./style.css";

export const OurVision = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Typography
        variant="h2"
        className={"vision_header_text"}
        style={{
          margin: "auto",
          marginTop: 20,
        }}
      >
        Our vision
      </Typography>

      <Box
        style={{ textAlign: "center" }}
        sx={{ p: 10, mt: 5 }}
        className="vision_description_box"
      >
        <Container maxWidth="lg">
          <Typography variant="body1">
            Our vision is to offer comprehensive, environmentally friendly
            solutions that will support all business operations in a paperless
            setting.Our staff has knowledge and experience from several fields.
            Our staff is made up of secretarial, photography, business process
            outsourcing, and finance experts. The Genesis team offers technical
            help around-the-clock and internationally.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ mt: 30 }} maxWidth="lg">
        <Typography
          variant="h2"
          className={"vision_header_text"}
          style={{
            margin: "auto",
            marginTop: 20,
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
            <Grid item xs={1} sm={1} md={1} sx={{ p: 5, mb: 5 }}>
              <InformationCard
                tag="Photography 365 total solutions"
                title="Limelight of Genesis"
                description="Photography 365 total solution is the first and only 
hybrid solution product for professional photographers 
and studio owners across the globe"
                image="/other/photo.jpeg"
                price={"200"}
              />
            </Grid>

            <Grid item xs={1} sm={1} md={1} sx={{ p: 5, mb: 5 }}>
              <InformationCard
                tag="BPM"
                title="Provide hybrid solution with automations"
                description="Provide hybrid solution with automations and system 
improvements while handling the back office."
                image="/other/bpm.jpg"
                price={"200"}
              />
            </Grid>

            <Grid item xs={1} sm={1} md={1} sx={{ p: 5, mb: 5 }}>
              <InformationCard
                tag="Web designing and Maintainence"
                title="Develop your website from scratch"
                description="Our IT arm will develop your website from scratch with 
modern and simple custom builds"
                image="/other/dev.jpg"
                price={"200"}
              />
            </Grid>

            <Grid item xs={1} sm={1} md={1} sx={{ p: 5, mb: 5 }}>
              <InformationCard
                tag="Content writing"
                title="Develop your website from scratch"
                description="we currently handle web content development, content 
modification and also article content."
                image="/other/content-writing.jpeg"
                price={"200"}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
