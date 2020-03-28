import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import headingImg from "../../../assets/img/heading-dark.png";
import styles from "../../../assets/jss/material-kit-react/views/aboutSections/ourRestaurantStyle.js";
import OurStoryCarousel from "../../Home/Sections/OurStoryCarousel";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
const useStyles = makeStyles(styles);

export default function OurRestaurant() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <Flip top>
          <h2 className={classes.title}>Rbiel's Bisto Tour</h2>
        </Flip>
      </div>
      <div style={{ margin: "20px" }}>
        <img src={headingImg} alt="..." />
      </div>
      <div className="container">
        <Fade left>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae
            accumsan. interdum hendrerit lacinia. Semper ac dolor vitae
            accumsan.
          </p>
        </Fade>
      </div>
      <OurStoryCarousel />
    </div>
  );
}
