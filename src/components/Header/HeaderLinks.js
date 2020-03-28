/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          <Button color="transparent" className={classes.navLink}>
            {" "}
            Home
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/about" className={classes.navLink}>
          <Button color="transparent" className={classes.navLink}>
            {" "}
            About
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/contact-us" className={classes.navLink}>
          <Button color="transparent" className={classes.navLink}>
            {" "}
            Contact Us
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
