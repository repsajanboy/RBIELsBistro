import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import styles from "../../assets/jss/material-kit-react/views/homePage.js";
import ContactFooter from "../../components/ContactFooter/ContactFooter.js";
import Footer from "../../components/Footer/Footer.js";
import AboutIntro from "./Sections/AboutIntro.js";
import OurChefs from "./Sections/OurChefs.js";
import OurRestaurant from "./Sections/OurRestaurant.js";
import Atmosphere from "./Sections/Atmosphere.js";

const useStyles = makeStyles(styles);

export default function About(props) {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="RBiel's Bistro"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 150,
          color: "white"
        }}
        {...rest}
      />
      <AboutIntro />
      <Atmosphere />
      <OurRestaurant />
      <OurChefs />
      <ContactFooter />
      <Footer />
    </div>
  );
}
