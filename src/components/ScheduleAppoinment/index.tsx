import * as React from "react";
import { useScheduleOpenStore } from "../../store/createScheduleAppoinmentStore";
import { Box, Modal, useTheme, useMediaQuery } from "@mui/material";

import { StartSchedule } from "./start";
import { CompleteSchedule } from "./complete";
import { GetContactInformation } from "./contactInfo";
import { SelectTime } from "./selectTime";
import { SelectService } from "./SelectService";

const steps = [
  "Schedule an Apponment",
  "Select a service",
  "Enter your contact information",
  "Choose date + time",
];

export const ScheduleApponment = () => {
  const { isOpen, setIsOpen } = useScheduleOpenStore();

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <StartSchedule
            disabled={activeStep === 0}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            length={steps.length}
          />
        );
      case 1:
        return (
          <SelectService
            disabled={activeStep === 0}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            length={steps.length}
          />
        );

      case 2:
        return (
          <GetContactInformation
            disabled={activeStep === 0}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            length={steps.length}
          />
        );
      case 3:
        return (
          <SelectTime
            disabled={activeStep === 0}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            length={steps.length}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: matches ? "80%" : "90%",
    bgcolor: "white",
    borderRadius: "20px",
    boxShadow: 24,
    textAlign: "center",
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ width: "100%" }}>
            {activeStep === steps.length ? (
              <>
                <CompleteSchedule handleReset={handleReset} />
              </>
            ) : (
              <>{getStepContent(activeStep)}</>
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
};
