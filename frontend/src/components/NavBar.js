import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core/';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  linkText: {
    textDecoration: 'none',
    color: 'white',
  },
  linkIcon: {
    textDecoration: 'none',
    color: 'black',
  }
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs>
              <Link to='/' className={classes.linkText}>
                <Typography variant="h6" color="inherit" className={classes.grow} align='center'>
                  Home
                </Typography>
              </Link>
            </Grid>

            <Grid item xs>
              <Link to='/movies' className={classes.linkText}>
                <Typography variant="body1" color="inherit" className={classes.grow} align='center'>
                  All Movies
                </Typography>
              </Link>
            </Grid>

            <Grid item xs>
              <Link to='/movies/byGenre' className={classes.linkText}>
                <Typography variant="body1" color="inherit" className={classes.grow} align='center'>
                  By Genre
                </Typography>
              </Link>
            </Grid>

            <Grid item xs>
              <Link to='/add' className={classes.linkIcon}>
                <Typography align='center'>
                  <Add />
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);