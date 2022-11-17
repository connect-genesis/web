import { Box, Typography, Button } from "@mui/material";
import "./style.css";

export const HelpBanner = () => {
  return (
    <>
      <Box
        style={{ textAlign: "center" }}
        sx={{ mt: 20, mb: 30, p: 10 }}
        className="help_banner"
      >
        <div className="help_content">
          <Typography variant="h2">What can we do to help?</Typography>
          <Typography
            variant="h3"
            style={{ color: "#6C38FF", fontWeight: 500 }}
            sx={{ mt: 2 }}
          >
            Talk to our experts today.
          </Typography>

          <Button variant="contained" size="small" sx={{ mt: 7 }}>
            Schedule an appointment
          </Button>
        </div>
      </Box>
    </>
  );
};
