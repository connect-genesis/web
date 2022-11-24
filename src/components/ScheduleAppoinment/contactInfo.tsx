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

export const GetContactInformation = (props: {
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
                  Enter your contact info
                </Typography>

                <TextField
                  color="secondary"
                  style={{ marginTop: 30 }}
                  fullWidth
                  label="First name"
                  size="small"
                  value={store.firstName}
                  onChange={(e) => store.setFirstName(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  color="secondary"
                  style={{ marginTop: 30 }}
                  size="small"
                  fullWidth
                  value={store.lastName}
                  onChange={(e) => store.setLastName(e.target.value)}
                  label="Last name"
                  variant="outlined"
                />

                <TextField
                  color="secondary"
                  style={{ marginTop: 30 }}
                  fullWidth
                  size="small"
                  label="Email address"
                  variant="outlined"
                  value={store.email}
                  onChange={(e) => store.setEmail(e.target.value)}
                />

                <TextField
                  color="secondary"
                  style={{ marginTop: 30 }}
                  fullWidth
                  size="small"
                  label="Phone number"
                  variant="outlined"
                  value={store.phone}
                  onChange={(e) => store.setPhone(e.target.value)}
                />

                <TextField
                  color="secondary"
                  multiline
                  style={{ marginTop: 30 }}
                  fullWidth
                  label="Additional comments..."
                  value={store.details}
                  rows={4}
                  onChange={(e) => store.setDetails(e.target.value)}
                />

                <CustomSeconaryButton
                  onClick={props.handleNext}
                  style={{ marginTop: 40, float: "right" }}
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
