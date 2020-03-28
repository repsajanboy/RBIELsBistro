import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import headingImg from "../../../assets/img/heading-dark.png";
import styles from "../../../assets/jss/material-kit-react/views/aboutSections/ourChefsStyle.js";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn
} from "mdbreact";
import image from "../../../assets/img/chef.jpg";
import Slide from "react-reveal/Slide";
import RubberBand from "react-reveal/RubberBand";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles(styles);

export default function OurChefs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <Slide top cascade>
          <h2 className={classes.meet}>Meet</h2>
        </Slide>
        <RubberBand>
          <MuiThemeProvider theme={theme}>
            <h1 className={classes.title}>Our Chefs</h1>
          </MuiThemeProvider>
        </RubberBand>
      </div>
      <div>
        <img src={headingImg} alt="..." />
      </div>
      <div className="container">
        <MDBCard className="my-5 px-1 pb-5 text-center">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="4" className="mb-md-0 mb-5">
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <h4 className="font-weight-bold dark-grey-text my-4">
                  Maria Kate
                </h4>
                <h6 className="text-uppercase grey-text mb-3">Head Chef</h6>
                <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  floating
                  size="sm"
                  className="mx-1 mb-0 btn-dribbble"
                >
                  <MDBIcon fab icon="dribbble" />
                </MDBBtn>
                <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
              </MDBCol>

              <MDBCol md="4" className="mb-md-0 mb-5">
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <h4 className="font-weight-bold dark-grey-text my-4">
                  John Doe
                </h4>
                <h6 className="text-uppercase grey-text mb-3">
                  Decoration Chef
                </h6>
                <MDBBtn
                  tag="a"
                  floating
                  size="sm"
                  className="mx-1 mb-0 btn-email"
                >
                  <MDBIcon icon="envelope" />
                </MDBBtn>
                <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  floating
                  size="sm"
                  className="mx-1 mb-0 btn-git"
                >
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </MDBCol>

              <MDBCol md="4" className="mb-md-0 mb-5">
                <img
                  src={image}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <h4 className="font-weight-bold dark-grey-text my-4">
                  Sarah Melyah
                </h4>
                <h6 className="text-uppercase grey-text mb-3">
                  Assistant Chef
                </h6>
                <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>
                <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  floating
                  size="sm"
                  className="mx-1 mb-0 btn-pin"
                >
                  <MDBIcon fab icon="pinterest" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}
