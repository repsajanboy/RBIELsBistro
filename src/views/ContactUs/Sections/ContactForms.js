import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBContainer
} from "mdbreact";
import styles from "../../../assets/jss/material-kit-react/views/contactSections/contactFormsStyle.js";
import headingImg from "../../../assets/img/heading-dark.png";
import Fade from "react-reveal/Fade";
const useStyles = makeStyles(styles);

export default function ContactForms() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="7">
            <div>
              <h1 className={classes.title}>Reach Us</h1>
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <img src={headingImg} alt="..." />
              </div>
              <div className="container">
                <p className="lead">
                  Have questions or requests, concerning our services? Let's
                  talk about on how we can help you, please use the contact form
                  on the right side.
                </p>
                <p className="lead">
                  We will respond to your message within 24 hours.
                </p>
                <p className="lead">
                  Below you can find a quick roadmap to get to our place.
                </p>
              </div>
            </div>
          </MDBCol>
          <MDBCol lg="5" className="lg-0 mb-4">
            <Fade top>
              <MDBCard className="mb-2 border border-dark">
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center mb-4">Write to us</p>
                    <label
                      htmlFor="defaultFormContactNameEx"
                      className="grey-text"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="defaultFormContactNameEx"
                      className="form-control"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactEmailEx"
                      className="grey-text"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="defaultFormContactEmailEx"
                      className="form-control"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactSubjectEx"
                      className="grey-text"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="defaultFormContactSubjectEx"
                      className="form-control"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactMessageEx"
                      className="grey-text"
                    >
                      Your message
                    </label>
                    <textarea
                      type="text"
                      id="defaultFormContactMessageEx"
                      className="form-control"
                      rows="3"
                    />
                    <div className="text-center mt-4">
                      <MDBBtn color="info" outline type="submit">
                        Send
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </Fade>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
