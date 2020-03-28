import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/contactSections/contactIntroStyle.js";
import LightSpeed from "react-reveal/LightSpeed";
const useStyles = makeStyles(styles);

export default function ContactIntro() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.wrapper}>
        <LightSpeed left>
          <h1 className={classes.title}>Contact Us </h1>
          <p style={{ fontStyle: "italic", color: "#FFFFFF" }}>
            Drop us a line, or give us a heads up if you're interested in
            visiting us.
          </p>
        </LightSpeed>
      </div>
    </div>
  );
}
