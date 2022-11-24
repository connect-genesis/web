import {
  Box,
  Button,
  Stack,
  Typography,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useScheduleDetailsStore } from "../../store/createScheduleDetailsStore";
import { CustomSeconaryButton } from "./Button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AppConfig } from "../../config";
import { useEffect, useState } from "react";
import { useScheduleOpenStore } from "../../store/createScheduleAppoinmentStore";

export const CompleteSchedule = (props: { handleReset: () => void }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const store = useScheduleDetailsStore();
  const openStore = useScheduleOpenStore();

  const createEventMutation = useMutation((data: any) => {
    return axios.post(`${AppConfig.BACKEND_URL}api/mail`, data);
  });

  useEffect(() => {
    createEventMutation.mutate({
      firstName: store.firstName,
      lastName: store.lastName,
      email: store.email,
      phone: store.phone,
      details: store.details,
      date: store.date,
      startTime: store.startTime,
      endTime: store.endTime,
    });
  }, []);

  const restHandler = () => {
    store.deleteEverything();
    openStore.setIsOpen(false);
    props.handleReset();
  };

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
            onClick={() => restHandler()}
            loading={createEventMutation.isLoading}
            size="small"
            sx={{ pl: 10, pr: 10, mt: 20 }}
            loadingIndicator={<CircularProgress color="primary" size={16} />}
          >
            Ok
          </CustomSeconaryButton>
        </Stack>
      </Box>
    </>
  );
};
