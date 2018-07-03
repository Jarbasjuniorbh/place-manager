import React from 'react';

import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import HeaderStyle from './Header.css';

const header = () => {
    return (
        <div className={HeaderStyle.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={HeaderStyle.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={HeaderStyle.flex}>
                        Title
          </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default header;