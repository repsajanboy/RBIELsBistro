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
import Features from "./Sections/Features.js";
import OurStory from "./Sections/OurStory.js";
import SmallParallax from "./Sections/SmallParallax.js";
import Testimonials from "./Sections/Testimonials.js";
import Intro from "./Sections/Intro.js";
import ContactFooter from "../../components/ContactFooter/ContactFooter.js";
import Footer from "../../components/Footer/Footer.js";
import OurMenus from "./Sections/OurMenus.js";

const useStyles = makeStyles(styles);

export default function Home(props) {
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
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Intro />
      <Features />
      <OurStory />
      <SmallParallax />
      <OurMenus />
      <Testimonials />
      <ContactFooter />
      <Footer />
    </div>
  );
}
