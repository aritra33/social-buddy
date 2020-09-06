import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ShowPosts.css';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 235,
        maxHeight:120,
        minHeight:120,
    }
});

const ShowPosts = ({ post }) => {
    const classes = useStyles();
    const {title, id } = post;
    return (
        <Grid container item  lg={3}>
        <div className='styleCard'>
            <Card>
                <CardActionArea>
                    <CardContent className={classes.root+' colorContent'}>
                        <Typography  variant="h5" color="textPrimary" component="p">Title: {title}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='colorActions'>
                    <div className="btn" >
                    <Button href={'/posts/'+id} variant="contained" size="small" color="danger">See More</Button>
                    </div>
                </CardActions>
            </Card>
        </div>
        </Grid>
    );
};

export default ShowPosts;