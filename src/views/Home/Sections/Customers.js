import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBIcon
} from "mdbreact";
import avatar from "../../../assets/img/faces/avatar.jpg";
import styles from "../../../assets/jss/material-kit-react/views/homePageSections/customerStyle.js";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);
const Customers = () => {
  const classes = useStyles();
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <img className={classes.avatar} src={avatar} alt="..." />
            <div style={{ height: 20 }}></div>
            <p className={classes.testimonial}>
              <MDBIcon icon="quote-left" /> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quod eos id officiis hic tenetur
              quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolore cum accusamus eveniet molestias
              voluptatum inventore laboriosam labore sit, aspernatur praesentium
              iste impedit quidem dolor veniam.
            </p>
            <h4 style={{ color: "#FFFFFF" }} className="font-weight-bold">
              Anna Deynah
            </h4>
            <h6 style={{ color: "#FFFFFF" }} className="font-weight-bold my-3">
              Founder at ET Company
            </h6>
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon far icon="star-half" className="blue-text" />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <img className={classes.avatar} src={avatar} alt="..." />
            <div style={{ height: 20 }}></div>
            <p className={classes.testimonial}>
              <MDBIcon icon="quote-left" /> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quod eos id officiis hic tenetur
              quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolore cum accusamus eveniet molestias
              voluptatum inventore laboriosam labore sit, aspernatur praesentium
              iste impedit quidem dolor veniam.
            </p>
            <h4 style={{ color: "#FFFFFF" }} className="font-weight-bold">
              Maria Kate
            </h4>
            <h6 style={{ color: "#FFFFFF" }} className="font-weight-bold my-3">
              Photographer at Studio LA
            </h6>
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon far icon="star-half" className="blue-text" />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <img className={classes.avatar} src={avatar} alt="..." />
            <div style={{ height: 20 }}></div>
            <p className={classes.testimonial}>
              <MDBIcon icon="quote-left" /> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quod eos id officiis hic tenetur
              quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolore cum accusamus eveniet molestias
              voluptatum inventore laboriosam labore sit, aspernatur praesentium
              iste impedit quidem dolor veniam.
            </p>
            <h4 style={{ color: "#FFFFFF" }} className="font-weight-bold">
              John Doe
            </h4>
            <h6 style={{ color: "#FFFFFF" }} className="font-weight-bold my-3">
              Front-end Developer in NY
            </h6>
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon icon="star" className="blue-text" />
            <MDBIcon far icon="star-half" className="blue-text" />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Customers;
