import { TextField } from "@material-ui/core";
import React from "react";

export default function index(props) {
  return (
    <TextField variant="outlined" color="primary" size="small" {...props} />
  );
}
