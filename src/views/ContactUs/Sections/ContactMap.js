import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  MDBRow,
  MDBCol,
} from "mdbreact";
import styles from "../../../assets/jss/material-kit-react/views/contactSections/contactMapStyle.js";
const useStyles = makeStyles(styles);

export default function ContactMap() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
        <MDBRow>
          <MDBCol lg="12" md="12" xs="12">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Rbiel's%20Bistro&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Rbiel's Bistro"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
          </MDBCol>
        </MDBRow>
    </div>
  );
}
