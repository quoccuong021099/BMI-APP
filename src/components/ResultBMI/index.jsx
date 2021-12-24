import { Box, Typography } from "@material-ui/core";
import React from "react";

export default function index({ bmi, result, yourBody }) {
  return (
    <Box mt={2}>
      <Typography component="h2" variant="h4" align="center">
        Result
      </Typography>

      <ul>
        <Typography component="li" variant="h6">
          Your weight is {yourBody?.weight} kg
        </Typography>
        <Typography component="li" variant="h6">
          Your height is {yourBody?.height} cm
        </Typography>
        <Typography component="li" variant="h6">
          Your BMI is {bmi}
        </Typography>
        <Typography component="li" variant="h6">
          With your BMI is {bmi} - {result}
        </Typography>
      </ul>
      <Typography component="h3" variant="body1" color="secondary">
        Note:
      </Typography>
      <ul>
        <Typography component="li" variant="body2">
          BMI applies to both men and women and adults over 18 years old.
        </Typography>
        <Typography component="li" variant="body2">
          Not applicable to pregnant women, athletes, the elderly and people
          with medical conditions varies between countries.
        </Typography>
      </ul>
    </Box>
  );
}
