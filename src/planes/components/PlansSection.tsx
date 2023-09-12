import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const plans: {
  title: string;
  description: string;
  price: number;
  hrefViewMore: string;
  hrefSelectPlan: string;
}[] = [
  {
    title: "Website",
    description: "Crea un catálogo profesional y atractivo que sorprenda.",
    price: 2990,
    hrefViewMore: "#",
    hrefSelectPlan: "/comprar/0",
  },
];

const PlansSection = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
    >
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Grid container spacing={0}></Grid>
        <Button>stock</Button>
        <Button>sin stock</Button>
      </ButtonGroup>
      <Box></Box>
    </Stack>
  );
};

export default PlansSection;
