import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"

import { makeStyles, ThemeProvider, AppBar, Toolbar, List, ListItem, Typography, } from '@material-ui/core'

import Logo from './Logo';
import Toggler from './Toggler';
import HiddenList from './HiddenList';
import MainList from './MainList';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    toolbar: {
    justifyContent: 'space-between',
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
    <AnimatePresence initial={false}>
    {show && (
         <motion.div className='motionMenu'
         initial={{ opacity: 0.5 }}
         animate={{ opacity: 1,  
           x: ['-20px',   '0px'] 
        
        }}
        exit={{ x: -500, opacity: 0, transition: { duration: 0.5 } }}
         transition={{
           ease: [0.03, 0.01, 0.01, .01],
           
           duration: 1,
       }}
       >

        <HiddenList />
        
    </motion.div>
    )}
    </AnimatePresence>
    <AppBar position="fixed">
    <Toolbar variant="dense" className={classes.toolbar}>

   
    <Link to={'/'} ><Logo/></Link>

    <MainList />
  

    


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