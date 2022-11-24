import {
  TextField,
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CustomSeconaryButton } from "./Button";
import { ScheduleAppoinmentDetails } from "./ScheduleInformation";
import { useScheduleDetailsStore } from "../../store/createScheduleDetailsStore";

export const SelectService = (props: {
  disabled: boolean;
  handleBack: () => void;
  handleNext: () => void;
  activeStep: number;
  length: number;
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const store = useScheduleDetailsStore();

  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 7 }}
        >
          <Grid item xs={1} sm={4} md={4}>
            <Box
              style={{ width: "100%" }}
              sx={{
                p: matches ? 15 : 5,
              }}
            >
              <Stack
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={2}
              >
                <Typography
                  variant={matches ? "h2" : "h4"}
                  style={{
                    float: "left",
                    marginBottom: 5,
                    alignItems: "flex-start",
                    width: "100%",
                    textAlign: "left",
                    justifyContent: "flex-start",
                  }}
                >
                  Select a service
                </Typography>

                <Box
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    p: 5,
                    border: "1px solid #DBDBDB",
                    borderRadius: 2,
                  }}
                  style={{ marginTop: 20 }}
                >
                  <Typography> Photography 365 total solutions </Typography>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    p: 5,
                    border: "1px solid #DBDBDB",
                    borderRadius: 2,
                  }}
                  style={{ marginTop: 20 }}
                >
                  <Typography>BPM</Typography>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    p: 5,
                    border: "1px solid #DBDBDB",
                    borderRadius: 2,
                  }}
                  style={{ marginTop: 20 }}
                >
                  <Typography>Web designing and maintainence</Typography>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    p: 5,
                    border: "1px solid #DBDBDB",
                    borderRadius: 2,
                  }}
                  style={{ marginTop: 20 }}
                >
                  <Typography>Content writing</Typography>
                </Box>

                <CustomSeconaryButton
                  onClick={props.handleNext}
                  style={{ marginTop: 150, float: "right" }}
                  sx={{ pl: 10, pr: 10 }}
                  size="small"
                >
                  {props.activeStep === length - 1 ? "Finish" : "Next"}
                </CustomSeconaryButton>
              </Stack>
            </Box>
          </Grid>

          {matches ? (
            <>
              <ScheduleAppoinmentDetails />
            </>
          ) : null}
        </Grid>
      </Stack>
    </>
  );
};
