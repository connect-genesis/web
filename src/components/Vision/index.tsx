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
        <Container maxWidth="xl">
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
            {Array.from(Array(2)).map((_, index) => (
              <>
                <Grid item xs={1} sm={1} md={1} sx={{ p: 5, mb: 5 }}>
                  <InformationCard
                    tag="BPM"
                    title="Develop your website from scratch"
                    description="Our IT arm will develop your website from scratch with 
modern and simple custom builds"
                    image="https://get.pxhere.com/photo/laptop-notebook-computer-macbook-mac-work-screen-apple-keyboard-ipad-technology-web-tablet-office-gadget-business-brand-imac-design-multimedia-personal-computer-electronic-device-computer-hardware-personal-computer-hardware-758989.jpg"
                    price={"200"}
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
                    price={"200"}
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
