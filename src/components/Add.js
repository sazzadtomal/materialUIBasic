import React from 'react'
import { Tooltip,Fab,Modal,Box, Typography,TextField, Stack } from '@mui/material'
import {Add as AddIcon} from '@mui/icons-material';
import { useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import styled from '@emotion/styled';

const StyledModal=styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
})
const UserBox=styled(Box)({
    display:"flex",
    alignItems:"center",
    margin:"10px"
})




const Add = () => {
    const [open,setOpen]=useState(false)

  
  
    return (
    <><Tooltip onClick={()=>setOpen(true)} title="Delete" sx={{position:"fixed",bottom:20,left:{xs:"calc(50% - 25px)",md:30}}}>
       <Fab color="primary" aria-label="add">
         <AddIcon />
        </Fab>
     </Tooltip>
     <StyledModal
     open={open}
     onClose={()=>setOpen(false)}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
     <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={4}>
       <Typography variant='h6' textAlign="center"> Create Post</Typography>
       <UserBox>
          <Typography fontWeight={500} variant='span'>John Doe</Typography>
       </UserBox>
       <TextField sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="What's on your mind?"
          variant="standard"
        />

        <Stack direction="row" gap={1} mt={2} mb={3}></Stack>
             <EmojiEmotionsIcon/>
             <EmojiEmotionsIcon/>
             <EmojiEmotionsIcon/>
             <EmojiEmotionsIcon/>
             <EmojiEmotionsIcon/>
             <EmojiEmotionsIcon/>
             <EmojiEmotionsIcon/>
   
     </Box>
   </StyledModal></>
  )
}

export default Add