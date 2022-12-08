import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { ColorCard } from "../components/Solutions/ColorCard";
import { NormalCard } from "../components/Solutions/NormalCard";

const solutions = [
  {
    name: "Photography 365 total solutions",
    tag: "Limelight of Genesis",
    description:
      "This is the limelight of Genesis. Photography 365 total solution is the first and only hybrid solution product for professional photographers and studio owners across the globe This product consist of an one stop solution for photographers ranging from appointment booking, invoicing to collections and reconciliations. As a part of the product we also provide real time editing of shoots for all our clients. Editing services such as HDR images, virtual staging, dawn to dusk images, portraits, headshots, events, automotive, food products are some specializations of our editors. Currently we serve many photographers across United States, Australia and Dubai with this package.",
    price: "Starting at $250.00",
    isColor: true,
    img: "/solutions/photo.gif",
  },
  {
    name: "BPM",
    tag: "Provide hybrid solution with automations",
    description:
      "Genesis is not ordinary, we do not take a process as is from our clients. The main aim of our BPM offerings is to provide hybrid solution with automations and system improvements while handling the back office. Our team is specialized in AP, AR, Invoicing, General Ledger, Virtual PA, Secretarial services and project management solutions. ",
    price: "Starting at $250.00",
    isColor: false,
    img: "/solutions/editing.gif",
  },
  {
    name: "Web designing and maintainence",
    tag: "Develop your website from scratch",
    description:
      "Our IT arm will develop your website from scratch with modern and simple custom builds. We aim at proving affordable customized solutions in both dynamic and static platforms with quality being our main priority.",
    price: "Starting at $250.00",
    isColor: true,
    img: "/solutions/webdevl.gif",
  },
];

export const SolutionsPage = () => {
  return (
    <>
      <Container sx={{ textAlign: "center" }}>
        <Box sx={{ mb: 30, mt: 20 }}>
          <Typography variant="h2" style={{ fontWeight: 500 }}>
            The solutions we provide
          </Typography>

          <Typography sx={{ mt: 5, fontWeight: 500 }} variant="h5">
            The pillars of success at Genesis
          </Typography>
        </Box>
      </Container>

      {solutions.map((solution) => {
        return (
          <>
            {solution.isColor ? (
              <ColorCard data={solution} />
            ) : (
              <NormalCard data={solution} />
            )}
          </>
        );
      })}
    </>
  );
};
