import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="nav-bar">
          <Typography variant="h6" className={classes.title}>
            Austin Small Business
          </Typography>
          <ul>
            <Button color="inherit" className="nav-list-item">
              <Link to="/">Listing</Link>
            </Button>
            <Button
              color="inherit"
              className="nav-list-item"
              onClick={() => {
                document.cookie = "loggedIn=";
                window.location.replace("/login");
              }}
            >
              Login
            </Button>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}
