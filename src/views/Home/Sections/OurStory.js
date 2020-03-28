import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/homePageSections/ourStoryStyle.js";
import OurStoryCarousel from "../Sections/OurStoryCarousel.js";
import { MDBBtn, MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
const useStyles = makeStyles(styles);

const OurStory = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h1 className={classes.title}>RBIEL'S Bistro</h1>
      <p style={{ fontStyle: "italic", fontSize: 18 }}>
        The pleasure of finding the difference...
      </p>
      <MDBRow>
        <MDBCol md="6">
          <OurStoryCarousel />
        </MDBCol>
        <MDBCol md="6">
          <div className={classes.story}>
            <h3 className={classes.welcome}>Our Story</h3>
            <div className="container" style={{ padding: "20 px" }}>
              <p style={{ textAlign: "justify", fontSize: 18, color: "black" }}>
                Rbiel's Bistro, a cozy nook along congressional Ave. in Quezon
                City, is passionate about giving its costumers a different kind
                of dining experience. It provides great ambience, serves yummy
                food and entertains guests with cool music at very affordable
                prices, a budget friendly indeed. Food Offering is a combination
                of Filipino dishses, Asian and Western Cuisines that food lovers
                will really love....
              </p>
              <Link to={"/about"}>
                <MDBBtn outline color="black">
                  Read More
                </MDBBtn>
              </Link>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default OurStory;
