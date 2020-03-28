import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/homePageSections/smallParallaxStyle.js";
import Pulse from "react-reveal/Pulse";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles(styles);

const SmallParallax = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Pulse duration={2000}>
        <MuiThemeProvider theme={theme}>
          <h1 className={classes.fresh}>"Fresh and Healthy"</h1>
        </MuiThemeProvider>
      </Pulse>
    </div>
  );
};

export default SmallParallax;
