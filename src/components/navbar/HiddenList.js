import React from 'react'
import { Link } from 'react-router-dom';

import {List, ListItem, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  
    hiddenlist: {
        paddingTop: '64px',
        position: 'absolute',
        whiteSpace: 'nowrap',
        color: '#fff',
        backgroundColor: "#3f51b5",
    },

}));


const HiddenList = () => {
    const classes = useStyles();
  return (
    <List  direction="row" className={classes.hiddenlist}>
    <ListItem> <Link to="/products" ><Typography variant="h6" className={classes.navlinks} >products</Typography></Link></ListItem>
    <ListItem> <Link to="/investors" ><Typography variant="h6" className={classes.navlinks} >investors</Typography></Link></ListItem>
    <ListItem> <Link to="/aboutus" ><Typography variant="h6" className={classes.navlinks} >about us</Typography></Link></ListItem>
    <ListItem> <Link to="/contact" ><Typography variant="h6" className={classes.navlinks} >contact</Typography></Link></ListItem>

    </List>
  )
}

export default HiddenList