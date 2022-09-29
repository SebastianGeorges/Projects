import React from "react";
import "./Posts.css";
import DropDown from "../../components/buttons/DropDown";
import { Grid } from "@mui/material";
import MyButton from "../../components/buttons/MyButton";
import MyCard from "../../components/buttons/MyCard";

const Posts = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" , my: "30px" }}
    >
      <Grid item xs={6}>
        <DropDown />
        <MyButton style={{ color: "red" }} type="submit" variant="outlined">Delete Post</MyButton>
      </Grid>
      <Grid item xs={6}>
      <MyCard />
      </Grid>
    </Grid>
  );
};

export default Posts;
