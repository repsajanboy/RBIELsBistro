import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import styles from "../../../assets/jss/material-kit-react/views/homePageSections/featureStyles.js";
import headingImg from "../../../assets/img/heading-dark.png";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
const useStyles = makeStyles(styles);

const Features = () => {
  const classes = useStyles();
  return (
    <MDBContainer>
      <div className={classes.section}>
        <section className="text-center">
          <Flip top>
            <h1 className={classes.title}>Our Services</h1>
          </Flip>
          <div>
            <img src={headingImg} alt="..." className={classes.headingImg} />
          </div>
          <h5 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </h5>
          <Fade top>
            <MDBRow>
              <MDBCol md="4">
                <Card>
                  <CardHeader>
                    <MDBIcon icon="utensils" size="3x" className="black-text" />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Special Dish</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores aperiam minima assumenda deleniti
                      hic.
                    </p>
                  </CardBody>
                </Card>
              </MDBCol>
              <MDBCol md="4">
                <Card>
                  <CardHeader>
                    <MDBIcon icon="coffee" size="3x" className="black-text" />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Coffee Shop</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores aperiam minima assumenda deleniti
                      hic.
                    </p>
                  </CardBody>
                </Card>
              </MDBCol>
              <MDBCol md="4">
                <Card>
                  <CardHeader>
                    <MDBIcon
                      fas
                      icon="glass-cheers"
                      size="3x"
                      className="black-text"
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Fine Dining</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit maiores aperiam minima assumenda deleniti
                      hic.
                    </p>
                  </CardBody>
                </Card>
              </MDBCol>
            </MDBRow>
          </Fade>
        </section>
      </div>
    </MDBContainer>
  );
};

export default Features;
