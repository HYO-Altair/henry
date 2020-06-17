import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    margins: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function home(props) {
  const classes = styles();

  // redirects to statistics page using implicit prop provided by react-router-dom
  const handleRedirectToStatistics = (e) => {
    props.history.push("/statistics");
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Actio Mensura Home Page
          </Typography>
        </Toolbar>
      </AppBar>

      <Button variant='contained' onClick={() => handleRedirectToStatistics()}>
        Click me to go to Statistics page
      </Button>
    </div>
  );
}
