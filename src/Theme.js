import { createTheme } from "@mui/material";

 const Theme = createTheme({
    breakpoints: {
        values:{
            xs:  0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        }
    },




    palette: {
        primary: {
          main: "#242526"
        },
        secondary: {
          main: "#d975d0"
        },
        text: {
          primary: "#E4E6EB",
          secondary: "#B0B3B8"
        },
        background: {
          default: "#242526",
          paper: "#242526"
        }
      }

    

})

export default Theme