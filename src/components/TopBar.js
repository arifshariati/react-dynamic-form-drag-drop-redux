import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom:'1rem'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: theme.palette.primary.contrastText,
        marginLeft:'1rem'
    },
    githubButton: {
        marginLeft:'1rem'
    }
}));
const TopBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
            <ViewQuiltIcon fontSize="large" />
            <Typography variant="h3" className={classes.title}>
                Drag & Drop Form
            </Typography>

            <Typography variant="h6" style={{color:"white", textDecoration:"none"}} >
                @arifshariati
            </Typography>

            <Link 
                href="https://github.com/arifshariati/zoom-clone-react-webRTC-socket-io-peers" 
                className={classes.githubButton}
                target="_blank"
            >
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        startIcon={<GitHubIcon fontSize="small" />}
                        className={classes.button}
                    >
                        View Source Code
                    </Button>
            </Link>

            </Toolbar>
        </AppBar>
    )
}

export default TopBar;
