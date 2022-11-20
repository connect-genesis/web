import { Grid, Box, Stack, Typography } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export const ScheduleAppoinmentDetails = () => {
  return (
    <>
      <Grid item xs={1} sm={4} md={2}>
        <Box
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#2A365A",
            borderRadius: 17,
          }}
        >
          <Stack
            direction="column"
            style={{ height: "100%" }}
            justifyContent="center"
            sx={{ p: 15 }}
            alignItems="center"
            spacing={2}
          >
            <EventAvailableIcon style={{ color: "white", fontSize: 80 }} />

            <Typography variant="h3" style={{ color: "white" }}>
              Schedule an appointment
            </Typography>

            <Typography
              variant="body2"
              style={{ color: "white", marginTop: 20 }}
            >
              Follow the steps to set up an appointment with us to get the best
              IT solutions By taking charge of their business operations,
              enhancing or creating new procedures, and offering them ongoing
              improvement, we make our clients' lives easier
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};
