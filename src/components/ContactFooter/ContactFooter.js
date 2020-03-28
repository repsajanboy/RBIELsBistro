import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/homePageSections/contactFooterStyle.js";
import { MDBIcon } from "mdbreact";
import headingImg from "../../assets/img/heading-dark.png";
import Wobble from "react-reveal/Wobble";
const useStyles = makeStyles(styles);

const ContactFooter = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className="container">
        <div className="row">
          <div class="col-md-12">
            <div class="main-title">
              <Wobble>
                <h1 className={classes.title}>Get in touch</h1>
              </Wobble>
              <div>
                <img
                  src={headingImg}
                  alt="..."
                  className={classes.headingImg}
                />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <h4 className={classes.contactUs}>Contact Us</h4>
                    <div>
                      <p style={{ textAlign: "left" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Aenean ac.
                      </p>
                      <ul>
                        <li className={classes.hours}>
                          <MDBIcon
                            fas
                            icon="map-marker-alt"
                            className={classes.icon}
                          />
                          <span className={classes.contactText}>
                            18B Congressional Ave. Quezon City, Philippines
                          </span>
                        </li>
                        <li className={classes.hours}>
                          <MDBIcon
                            fas
                            icon="phone-alt"
                            className={classes.icon}
                          />
                          <span className={classes.contactText}>7255-7370</span>
                        </li>
                        <li className={classes.hours}>
                          <MDBIcon
                            fas
                            icon="mobile-alt"
                            className={classes.icon}
                          />
                          <span className={classes.contactText}>
                            09664637991
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <h4 className={classes.contactUs}>Opening Hour</h4>
                    <div>
                      <ul>
                        <li className={classes.hours}>
                          <span className={classes.day}>Monday</span>{" "}
                          <span className={classes.time}>09 am - 10 pm</span>
                        </li>
                        <li className={classes.hours}>
                          <span className={classes.day}>Tuesday</span>{" "}
                          <span className={classes.time}>09 am - 10 pm</span>
                        </li>
                        <li className={classes.hours}>
                          <span className={classes.day}>Wednesday</span>{" "}
                          <span className={classes.time}>09 am - 10 pm</span>
                        </li>
                        <li className={classes.hours}>
                          <span className={classes.day}>Thursday</span>{" "}
                          <span className={classes.time}>09 am - 10 pm</span>
                        </li>
                        <li className={classes.hours}>
                          <span className={classes.day}>Friday</span>{" "}
                          <span className={classes.time}>11 am - 08 pm</span>
                        </li>
                        <li className={classes.hours}>
                          <span className={classes.day}>Saturday</span>{" "}
                          <span className={classes.time}>10 am - 11 pm</span>
                        </li>
                        <li className={classes.hours}>
                          <span className={classes.day}>Sunday</span>{" "}
                          <span className={classes.time}>Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <h4 className={classes.contactUs}>Social Media</h4>
                    <div>
                      <ul>
                        <li className={classes.socialLi}>
                          <a href="#.">
                            <MDBIcon
                              fab
                              icon="facebook-f"
                              className={classes.socialIcon}
                            />
                          </a>
                        </li>
                        <li className={classes.socialLi}>
                          <a href="#.">
                            <MDBIcon
                              fab
                              icon="twitter"
                              className={classes.socialIcon}
                            />
                          </a>
                        </li>
                        <li className={classes.socialLi}>
                          <a href="#.">
                            <MDBIcon
                              fab
                              icon="google-plus-g"
                              className={classes.socialIcon}
                            />
                          </a>
                        </li>
                        <li className={classes.socialLi}>
                          <a href="#.">
                            <MDBIcon
                              fab
                              icon="pinterest-p"
                              className={classes.socialIcon}
                            />
                          </a>
                        </li>
                        <li className={classes.socialLi}>
                          <a href="#.">
                            <MDBIcon
                              fab
                              icon="instagram"
                              className={classes.socialIcon}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
