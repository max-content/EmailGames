import React from 'react'
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

const Footer = () => {
  return (
    <Paper>
        <Box component="footer" sx={{m:1}}>
            <Typography variant="p"> Copyright 2024 - Max Salzman 
            <IconButton aria-label="Support" size="small" component="a" href='https://venmo.com/u/mnsalz91'><AttachMoneyIcon color="secondary" /> </IconButton> </Typography>
        
        </Box>

    </Paper>
  )
}

export default Footer