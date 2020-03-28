import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import ContactFooter from "../../components/ContactFooter/ContactFooter.js";
import Footer from "../../components/Footer/Footer.js";
import ContactIntro from "./Sections/ContactIntro.js";
import ContactForms from "./Sections/ContactForms.js";
import ContactMap from "./Sections/ContactMap.js";



export default function ContactUs(props) {
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
      <ContactIntro />
      <ContactForms />
      <ContactMap />
      <ContactFooter />
      <Footer />
    </div>
  );
}
