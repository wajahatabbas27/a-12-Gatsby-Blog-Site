import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          ></IconButton>
          <Typography variant='h6' color='inherit'>
            <h3
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                marginLeft: "500px",
              }}
            >
              Blog Site By Wajahat Abbas
            </h3>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
