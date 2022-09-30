import React, { useEffect, useState } from "react";
import "./Posts.css";
import DropDown from "../../components/buttons/DropDown";
import { Grid } from "@mui/material";
import MyButton from "../../components/buttons/MyButton";
import MyCard from "../../components/buttons/MyCard";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../redux/actions/posts/deletePost";
import MyInput from "../../components/buttons/MyInput";
import TablePosts from "./tableposts/TablePosts";

const Posts = () => {
  const dispatch = useDispatch();
  const hasErrors = useSelector((state) => state?.postState?.hasErrors);
  const loading = useSelector((state) => state?.postState?.loading);

  const [postId, setPostId] = useState('');
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  }, [accessToken]);

  
  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" , my: "30px" }}
    >
      <Grid item xs={6}>
        <DropDown />
        <MyInput/>
        <MyButton style={{ color: "red" }} type="submit" variant="outlined" onClick={() => dispatch(deletePost("6324293ca0c5229b08b9875a", accessToken))}>Delete Post</MyButton>
      </Grid>
      <Grid item xs={6}>
        <TablePosts/>
      </Grid>
    </Grid>
  );
};

export default Posts;
