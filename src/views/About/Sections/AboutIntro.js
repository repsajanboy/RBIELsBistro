import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/aboutSections/aboutIntroStyle.js";
import Flip from "react-reveal/Flip";
const useStyles = makeStyles(styles);

export default function AboutIntro() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.wrapper}>
        <Flip top>
          <h1 className={classes.title}>About Us</h1>
        </Flip>
      </div>
    </div>
  );
}
