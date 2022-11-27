import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export const ColorCard = (props: {
  data: {
    name: string;
    tag: string;
    description: string;
    price: string;
    isColor: boolean;
    img: string;
  };
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        pt: { xs: 0, md: 20 },
        pb: { xs: 0, md: 20 },
        background: "#F8F9FF",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={8}>
            <Box sx={{ pr: { xs: 0, md: 20 } }}>
              <Typography
                variant="h4"
                gutterBottom
                style={{
                  fontWeight: 600,
                  color: "#6C38FF",
                  letterSpacing: "2px",
                }}
                sx={{ mt: { xs: 20, md: 1 } }}
              >
                {props.data.name}
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ mt: 5 }}
                style={{
                  fontWeight: "bolder",
                  letterSpacing: "2px",
                }}
              >
                {props.data.tag}
              </Typography>

              <Typography sx={{ mt: 10 }} variant="body1">
                {props.data.description}
              </Typography>

              <Typography
                variant="body2"
                style={{ color: "#868585" }}
                sx={{ mt: 10, fontWeight: 600 }}
              >
                {props.data.price}
              </Typography>
            </Box>
          </Grid>

          <Grid
            xs={2}
            sm={4}
            md={4}
            alignContent="flex-start"
            alignItems="flex-start"
            width={"100%"}
          >
            <img
              src={props.data.img}
              style={{ height: 300, marginLeft: "auto", marginRight: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
