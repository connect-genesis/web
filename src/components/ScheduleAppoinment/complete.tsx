import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CustomSeconaryButton } from "./Button";

export const CompleteSchedule = (props: { handleReset: () => void }) => {
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
            You will recieve a confirmation email
          </Typography>

          <img src="/other/email-sent.gif" style={{ width: "30%" }} />

          <CustomSeconaryButton
            onClick={props.handleReset}
            size="small"
            sx={{ pl: 10, pr: 10, mt: 20 }}
          >
            Ok
          </CustomSeconaryButton>
        </Stack>
      </Box>
    </>
  );
};
