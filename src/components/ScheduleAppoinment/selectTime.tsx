import {
  Typography,
  TextField,
  Box,
  Stack,
  Grid,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { CustomSeconaryButton } from "./Button";
import { ScheduleAppoinmentDetails } from "./ScheduleInformation";
import { useState } from "react";
import { useScheduleDetailsStore } from "../../store/createScheduleDetailsStore";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const SelectTime = (props: {
  disabled: boolean;
  handleBack: () => void;
  handleNext: () => void;
  activeStep: number;
  length: number;
}) => {
  const theme = useTheme();

  const [value, setValue] = useState<Dayjs | null>(null);
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [endTime, setEndTime] = useState<Dayjs | null>(null);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const store = useScheduleDetailsStore();

  const handleNextClick = () => {
    if (startTime && endTime) {
      store.setStartTime(
        value
          ?.hour(startTime.hour())
          .minute(startTime.minute())
          .toDate()
          .toISOString()!
      );
      store.setEndTime(
        value
          ?.hour(startTime.hour())
          .minute(startTime.minute())
          .toDate()
          .toISOString()!
      );
      store.setDate(value?.format("YYYY-MM-DD")!);
    }
    props.handleNext();
  };

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
          columns={{ xs: 1, sm: 8, md: 5 }}
        >
          <Grid item xs={1} sm={4} md={3}>
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
                    marginBottom: 20,
                    alignItems: "flex-start",
                    width: "100%",
                    textAlign: "left",
                    justifyContent: "flex-start",
                  }}
                >
                  Choose date + time
                </Typography>

                <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                  <DatePicker
                    label="Select a day"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </LocalizationProvider>

                <Stack
                  direction="row"
                  style={{ width: "100%", minHeight: 300 }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="Start Time"
                      value={startTime}
                      onChange={(newValue) => {
                        setStartTime(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          style={{ marginTop: 30, marginRight: 10 }}
                        />
                      )}
                    />
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="End Time"
                      value={endTime}
                      onChange={(newValue) => {
                        setEndTime(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          style={{ marginTop: 30, marginLeft: 3 }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    onClick={props.handleBack}
                    size="small"
                    style={{
                      marginTop: 40,
                      float: "right",
                      color: "#6C38FF",
                      borderColor: "#6C38FF",
                    }}
                    startIcon={<KeyboardBackspaceIcon />}
                  >
                    {props.activeStep === length - 1 ? "Finish" : "Back"}
                  </Button>

                  <CustomSeconaryButton
                    size="small"
                    onClick={handleNextClick}
                    style={{ marginTop: 40, float: "right" }}
                    sx={{ pl: 10, pr: 10 }}
                  >
                    {props.activeStep === length - 1 ? "Finish" : "Next"}
                  </CustomSeconaryButton>
                </Stack>
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
