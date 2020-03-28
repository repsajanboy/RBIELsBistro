import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavPills from "../../../components/NavPills/NavPills.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import sampleMenu from "../../../assets/img/3.jpg";
import headingImg from "../../../assets/img/heading-dark.png";
import styles from "../../../assets/jss/material-kit-react/views/homePageSections/ourMenuStyle.js";

const useStyles = makeStyles(styles);
export default function OurMenus() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <div className="container text-center">
            <h3 className={classes.title}>Discover</h3>
            <h1 className={classes.welcome}>Our Menu</h1>
            <div>
              <img src={headingImg} alt="..." />
            </div>
          </div>
          <NavPills
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: "Breakfast",
                tabContent: (
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                )
              },
              {
                tabButton: "Lunch",
                tabContent: (
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                )
              },
              {
                tabButton: "Dinner",
                tabContent: (
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                )
              },
              {
                tabButton: "Drinks",
                tabContent: (
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBCard className="mb-2 border border-dark">
                          <MDBCardImage
                            className="img-fluid"
                            src={sampleMenu}
                          />
                          <MDBCardBody>
                            <MDBCardTitle>Menu Name</MDBCardTitle>
                            <MDBCardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
