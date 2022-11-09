import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./style.css";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#6C38FF"),
  backgroundColor: "#6C38FF",
  "&:hover": {
    backgroundColor: "#6C38FF",
  },
}));

export const InformationCard = ({
  tag,
  title,
  image,
  description,
}: {
  tag: string;
  title: string;
  image: string;
  description: string;
}) => {
  return (
    <>
      <Box className="information_card">
        <Typography variant="body1" gutterBottom className="category_text">
          {tag}
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          className="title"
          sx={{ mt: 5 }}
        >
          {title}
        </Typography>

        <Box
          className="image_box"
          sx={{ mt: 5 }}
          component={"img"}
          style={{
            background: "#fffefe",
            width: "100%",
          }}
          src={image}
        ></Box>

        <Typography
          variant="body1"
          gutterBottom
          className="text"
          sx={{ mt: 7 }}
        >
          {description}
        </Typography>

        <ColorButton
          variant="contained"
          endIcon={<ArrowRightAltIcon />}
          sx={{ mt: 5 }}
          size="medium"
        >
          read more
        </ColorButton>
      </Box>
    </>
  );
};
