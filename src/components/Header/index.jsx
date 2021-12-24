import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHeaderStyle } from "../../common/styles";
import MenuIcon from "@material-ui/icons/Menu";
export default function index() {
  const classes = useHeaderStyle();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
            <img
              alt="logo"
              src="https://chandanai.com/wp-content/uploads/2019/01/logon.png"
              className={classes.logo}
            />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BMI
          </Typography>
          {/* <Button variant="contained" className={classes.button}>
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
