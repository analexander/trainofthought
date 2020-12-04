import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
        content: {
        flex: '1 0 auto',
    },
        cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card style={{display: 'inline-block'}}>
                    <CardContent>
                        <div className={classes.details}>
                            <Typography component="h5" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Mac Miller
                            </Typography>
                            <div className={classes.controls}>
                                <IconButton aria-label="previous">
                                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon className={classes.playIcon} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                </IconButton>
                            </div>
                        </div>
                    </CardContent>
                    <CardMedia
                        className={classes.cover}
                        image="/static/images/cards/live-from-space.jpg"
                        title="Live from space album cover"
                    />
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}
