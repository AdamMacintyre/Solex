import React, { useState } from 'react'
import { Link } from 'react-router-dom';


import { makeStyles, ThemeProvider, AppBar, Toolbar, List, ListItem, Typography, } from '@material-ui/core'

import Logo from './Logo';
import Toggler from './Toggler';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    toolbar: {
        
    },

    list : {
        display: "flex",
    },

    navlinks:{
        whiteSpace: 'nowrap'
    },


}));



   
function Navbar() {
    const classes = useStyles();

    const [show, setShow] = useState(false)

    const togglerHandler = () => {
        setTimeout(()=>{ 
            (setShow(!show))
        }, 300)
    }
  return (
    <div>
    <ThemeProvider>
    <AppBar position="fixed">
    <Toolbar variant="dense" className={classes.toolbar}>

   
    <Link to={'/'} ><Logo/></Link>


    <List  direction="row" className={classes.list}>
    <ListItem> <Link to="/aboutus" ><Typography variant="h6" className={classes.navlinks} >about us</Typography></Link></ListItem>
    <ListItem> <Link to="/contact" ><Typography variant="h6" className={classes.navlinks} >contact</Typography></Link></ListItem>

    </List>

    <Toggler 
      togglerHandler={togglerHandler}
      show={show ? "open" : "closed"} 
    />


    </Toolbar>
    </AppBar>
    </ThemeProvider>
    




    </div>
  )
}

export default Navbar