import React from "react";
import "./Posts.css";
import DropDown from "../../components/buttons/DropDown";
import { Grid } from "@mui/material";
import MuiCard from "../../components/muiCard/MuiCard"


const Posts = () => {
  return (
    
     
    
    <Grid container>
    <Grid item xs={4}>
    <h1>Posts</h1>
    <MuiCard/>
    </Grid>
    <Grid item xs={8}
    sx={{  mt : 15}}> 
    <DropDown />
    </Grid>
  </Grid>
  );
};

export default Posts;
