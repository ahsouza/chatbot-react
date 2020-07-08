import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListFriends from './ListFriends';
import MediaControlCard from './MediaControlCard';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ListFriends/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>

            <MediaControlCard/>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <SwipeableTextMobileStepper/>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>


          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
