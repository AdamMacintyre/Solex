import React from 'react'
import { motion } from "framer-motion"
import { makeStyles, useTheme } from '@material-ui/core'

const Path = (props) => (
    < motion.path 
        strokeWidth="4" 
        fill="transparent" 
        strokeLinecap="round" 
        {...props} />
);
const transition = { duration: 0.3 };


const useStyles = makeStyles((theme) => ({
    toggler: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        height: "35px",
        width: '35px',
        background:'transparent',
        border: '3px solid #fff',
        borderRadius: '5px',

        [theme.breakpoints.between('sm', 'xl')]: {
            display: 'none'
         }
    },

}));

function Toggler({togglerHandler, show}) {
    const classes = useStyles();
    const theme = useTheme();
  return (
    <button className={classes.toggler}
    onClick={togglerHandler}
    >
        <svg width="22" height="19" veiwBox="0 0 23 23">
            <Path animate={show} 
            initial={false} 
            variants={{
                 closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(255, 100%, 100%)"},
                 open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(255, 100%, 100%)" }
            
            }} transition={transition}  
            />

            <Path 
            d="M 2 9.423 L 20 9.423"
            stroke="hsl(255, 100%, 100%)"
            animate={show}
            initial={false}
            variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
            }}
            transition={transition}  
            />

            <Path animate={show} 
            initial={false} 
            variants={{
                 closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(255, 100%, 100%)"},
                 open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(255, 100%, 100%)" }
            
            }} transition={transition}  
            />
        </svg>
    </button>
  )
}

export default Toggler