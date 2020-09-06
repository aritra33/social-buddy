import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar className='nab-color'>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography  variant="h6" className={classes.title}>         
                       <a className='text-style' href="/">Social Buddy</a> 
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;