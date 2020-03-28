import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/homePageSections/testimonialStyle.js";
import headingImg from "../../../assets/img/heading-dark.png";
import Customers from "./Customers.js";
import Zoom from "react-reveal/Zoom";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles(styles);

const Testimonials = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Zoom>
        <MuiThemeProvider theme={theme}>
          <h3 className={classes.title}>Taste - e - monials</h3>
          <h1 className={classes.welcome}>Some Words</h1>
          <h3 className={classes.title}>From Customers</h3>
        </MuiThemeProvider>
      </Zoom>
      <div>
        <img src={headingImg} alt="..." className={classes.headingImg} />
      </div>
      <div style={{ height: 20 }}></div>
      <div>
        <Customers />
      </div>
    </div>
  );
};

export default Testimonials;
