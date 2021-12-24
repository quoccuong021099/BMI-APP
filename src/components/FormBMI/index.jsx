import { Box, Button, InputAdornment } from "@material-ui/core";
import HeightIcon from "@material-ui/icons/Height";
import PetsIcon from "@material-ui/icons/Pets";
import React from "react";
import InputCommon from "../../common/InputCommon";
import { useFormBMIStyle } from "../../common/styles";

export default function index({ handleSubmit, register, onSubmit, errors }) {
  const classes = useFormBMIStyle();

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.group}>
        <InputCommon
          className={classes.input}
          label="Weight (in kg)"
          error={!!errors && !!errors.weight}
          helperText={errors.weight?.message}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PetsIcon />
              </InputAdornment>
            ),
            ...register("weight"),
          }}
        />
        <InputCommon
          className={classes.input}
          label="Height (in cm)"
          error={!!errors && !!errors.height}
          helperText={errors.height?.message}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HeightIcon />
              </InputAdornment>
            ),
            ...register("height"),
          }}
        />
      </div>
      <Box display="flex" justifyContent="center" mt={5}>
        <Button variant="contained" className={classes.button} type="submit">
          Calculator BMI
        </Button>
      </Box>
    </form>
  );
}
