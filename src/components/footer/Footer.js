import React from 'react'

import { BottomNavigation} from '@mui/material';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  
    footerContainer: {
        position: 'absolute',
        whiteSpace: 'nowrap',
        color: '#fff',
        backgroundColor: "#3f51b5 !important",
        bottom: "0",
        left: '0',
        right: '0',
    },

}));

const Footer = () => {
    const classes = useStyles();
  return (
    <BottomNavigation className={classes.footerContainer}>
        <h1>footer</h1>
    </BottomNavigation>
  )
}

export default Footer