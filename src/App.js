import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import { useState } from "react";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./components/Add";




function App() {

  const [mode,setMode]=useState("light")


  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  }

  )



  return (

    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar set={setMode} mode={mode}/>
        <Feed/>
        <RightBar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
