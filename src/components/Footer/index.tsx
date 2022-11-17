import {
  Grid,
  Stack,
  Typography,
  Box,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import "./style.css";
import { useTheme } from "@mui/material/styles";
import { GenesisLogo } from "../Header";
import { solutions, footerLinks } from "./data";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Box className="footer">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 10 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: matches ? 400 : 200,
              }}
            >
              <GenesisLogo />
            </Box>
          </Grid>

          <Grid item xs={2} sm={4} md={2}>
            <Box
              style={{
                display: "flex",
                float: matches ? "left" : "none",
                justifyContent: "center",
                alignItems: "center",
                height: matches ? 400 : 200,
                padding: 20,
              }}
            >
              <Stack>
                {solutions.map(
                  (solution: { solution: string; isTitle?: boolean }) => (
                    <>
                      <Typography
                        style={{ color: "#FFFFFF" }}
                        sx={{ mb: solution.isTitle ? 10 : 5 }}
                        variant={solution.isTitle ? "h5" : "body1"}
                      >
                        {solution.solution}
                      </Typography>
                    </>
                  )
                )}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={2} sm={4} md={2}>
            <Box
              style={{
                display: "flex",
                float: matches ? "left" : "none",
                justifyContent: "center",
                alignItems: "center",
                height: matches ? 400 : 200,
              }}
            >
              <Stack>
                {footerLinks.map((link: { name: string; to: string }) => (
                  <>
                    <Typography
                      component={Link}
                      to={link.to}
                      style={{ color: "#FFFFFF" }}
                      sx={{ mt: 5 }}
                      variant={"body1"}
                    >
                      {link.name}
                    </Typography>
                  </>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                float: matches ? "left" : "none",
                alignItems: "center",
                marginTop: 20,
                height: matches ? 400 : 200,
              }}
            >
              <Stack>
                <IconButton>
                  <InstagramIcon style={{ color: "white" }} />
                </IconButton>

                <IconButton>
                  <TwitterIcon style={{ color: "white" }} />
                </IconButton>

                <IconButton>
                  <YouTubeIcon style={{ color: "white" }} />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
