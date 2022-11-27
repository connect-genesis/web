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
  price,
}: {
  tag: string;
  title: string;
  image: string;
  description: string;
  price: string;
}) => {
  return (
    <>
      <Box className="information_card">
        <Typography
          variant="body1"
          gutterBottom
          style={{
            fontWeight: 600,
            color: "#6C38FF",
            letterSpacing: "2px",
          }}
        >
          {tag}
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          sx={{ mt: 5 }}
          style={{
            fontWeight: "bolder",
            letterSpacing: "2px",
          }}
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
            maxHeight: 300,
          }}
          src={image}
        ></Box>

        <Typography variant="body1" gutterBottom sx={{ mt: 7 }}>
          {description}
        </Typography>

        {/*
 * 
        <Typography
          variant="body1"
          sx={{ mt: 7 }}
          style={{
            color: "#868585",
            fontWeight: "bolder",
          }}
        >
          Starting at ${price}
        </Typography>

 */}

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
