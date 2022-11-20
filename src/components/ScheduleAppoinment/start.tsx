import {
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { CustomSeconaryButton } from "./Button";

export const StartSchedule = (props: {
  disabled: boolean;
  handleBack: () => void;
  handleNext: () => void;
  activeStep: number;
  length: number;
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Box
        sx={{
          p: matches ? 15 : 5,
        }}
      >
        <Stack spacing={0} alignItems="center">
          <Typography variant={matches ? "h2" : "h4"}>
            You are only a few steps <br /> behind from scheduling an
            appointment
          </Typography>

          <Typography variant="h6" style={{ marginTop: 20, color: "#868585" }}>
            Click next to continue
          </Typography>

          <img src="/other/lets-connect.gif" style={{ width: "40%" }} />

          <CustomSeconaryButton
            onClick={props.handleNext}
            size="small"
            sx={{ pl: 10, pr: 10 }}
          >
            {props.activeStep === length - 1 ? "Finish" : "Next"}
          </CustomSeconaryButton>
        </Stack>
      </Box>
    </>
  );
};
