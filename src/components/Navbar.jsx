import styled from '@emotion/styled'
import { AppBar,Toolbar, Typography, Box, InputBase,Badge,Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {

 const [open,setOpen]=useState(false)


  const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
  }) 
  
  const Search=styled("div")(({theme})=>({
     padding:"0 10px",
     backgroundColor: theme.palette.background.default,
     borderRadius: theme.shape.borderRadius,
     width:"40%"

  }))
  const UserBox=styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }

  }))
  const IconContainer=styled(Box)(({theme})=>({
    display:"none",
    gap:"20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }

  }))



  return (

    <AppBar position='sticky'><StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>LAMA DEV</Typography>
        <PetsIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase color={"text.primary"} placeholder='search'/></Search>
        <IconContainer>
        <Badge badgeContent={4} color="error">
           <EmailIcon color="action" />
        </Badge>
        <Badge badgeContent={4} color="error">
           <NotificationsIcon color="action" />
        </Badge>

        <Avatar onClick={e=>setOpen(true)} sx={{width:"30px",height:"30px"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </IconContainer>

        <UserBox>
        <Typography  variant='span'>John</Typography>
        <Avatar onClick={e=>setOpen(true)} sx={{width:"30px",height:"30px"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </UserBox>
        
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        
        
        </AppBar>
  )
}

export default Navbar