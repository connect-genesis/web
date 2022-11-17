import { Grid, Container, Typography, Stack, Box } from "@mui/material";
import "./about.css";

export const About = () => {
  return (
    <>
      <Container sx={{ mt: 20 }} maxWidth="xl">
        <Typography variant="h2">About Genesis Global</Typography>

        <Typography sx={{ mt: 5, fontWeight: "bold" }} variant="h4">
          We work with the best in the business with 100+ marketers, developers,
          and strategists helping achieve client goals.
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 5 }}
          columns={{ xs: 1, sm: 5, md: 7 }}
          sx={{ mt: 10 }}
        >
          <Grid item xs={1} sm={3} md={4}>
            <Typography
              variant="body1"
              sx={{
                width: "100%",
                lineHeight: 1.7,
                mt: "10%",
                color: "#333333",
              }}
            >
              Genesis was created with the goal of providing back office support
              to a US-based photographic studio company because this was a
              special procedure that required a lot of technological know-how.
              The star product from Genesis, Genesis Photographic Office 365, is
              now used by numerous photography studios in the United States,
              Australia, and Dubai. Behind the scenes, Genesis is a youthful,
              talented group with the goal of offering universal solutions. Our
              staff has knowledge and experience from several fields. Our staff
              is made up of secretarial, photography, business process
              outsourcing, and finance experts. The Genesis team offers
              technical help around-the-clock and internationally.
            </Typography>
          </Grid>
          <Grid item xs={1} sm={3} md={3}>
            <img
              src={"/globe.png"}
              alt="Globe"
              style={{
                width: "100%",
                marginTop: "10%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
