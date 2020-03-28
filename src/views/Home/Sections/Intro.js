import React from "react";
import { MDBMask, MDBRow, MDBCol, MDBView, MDBContainer } from "mdbreact";
import headingImg from "../../../assets/img/introbg.jpg";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/homePageSections/introStyle.js";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles(styles);
const Intro = () => {
  const classes = useStyles();
  return (
    <div>
      <Zoom>
        <MDBView src={headingImg}>
          <MDBMask className="rgba-black-light" />
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%", paddingTop: "17rem" }}
          >
            <MDBRow>
              <MDBCol md="12" xs="12" className="mb-4 white-text text-center">
                <LightSpeed delay={1500} left>
                  <MuiThemeProvider theme={theme}>
                    <div style={{ border: "solid 5px white", padding: 10 }}>
                      <h1 className={classes.title}>RBIEL's Bistro</h1>
                      <hr className="hr-light my-4" />
                      <h5 className={classes.welcome}>
                        <strong>
                          Coffee Shop • Fine Dining • Music Lounge
                        </strong>
                      </h5>
                    </div>
                  </MuiThemeProvider>
                </LightSpeed>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </Zoom>
    </div>
  );
};
export default Intro;
