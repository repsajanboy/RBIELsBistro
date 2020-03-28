import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import headingImg from "../../../assets/img/heading-dark.png";
import styles from "../../../assets/jss/material-kit-react/views/aboutSections/atmosphereStyle.js";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
const useStyles = makeStyles(styles);

export default function Atmosphere() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <Flip top>
          <h2 className={classes.story}>Our Story</h2>
          <h1 className={classes.title}>RBIEL'S Bistro</h1>
        </Flip>
      </div>
      <div style={{ margin: "20px" }}>
        <img src={headingImg} alt="..." />
      </div>
      <div className="container">
        <Fade left>
          <p className="lead">
            Rbiel's Bistro, a cozy nook along congressional Ave. in Quezon City,
            is passionate about giving its costumers a different kind of dining
            experience. It provides great ambience, serves yummy food and
            entertains guests with cool music at very affordable prices, a
            budget friendly indeed. Food Offering is a combination of Filipino
            dishses, Asian and Western Cuisines that food lovers will really
            love.
          </p>
          <p className="lead">
            RBIEL'S Bistro is also available for intimate events and catering at
            very affordable prices
          </p>
          <p className="lead">
            We are situated near Visayas Avenue Corner congressional Avenue in
            Quezon City. So please come and visit us for you to enjoy the
            ambience, the food, the music and experience the difference
          </p>
        </Fade>
      </div>
    </div>
  );
}
