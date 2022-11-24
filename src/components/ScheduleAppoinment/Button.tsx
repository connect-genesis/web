import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";

export const CustomSeconaryButton = styled(LoadingButton)(({ theme }) => ({
  color: theme.palette.getContrastText("#6C38FF"),
  backgroundColor: "#6C38FF",
  "&:hover": {
    backgroundColor: "#6C38FF",
  },
}));
