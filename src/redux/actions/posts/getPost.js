import axios from "axios";
import { baseUrl } from "../../../utils/Constants";
import {
  getPostFailure,
  getPostRequest,
  getPostSuccess,
} from "../../types/posts/postsTypes";

export const getPost = (token) => {
  return (dispatch) => {
    dispatch(getPostRequest());
    axios
      .get(`${baseUrl}/admins/get-posts/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("posts: ", response.data);
        const myData = response.data.posts; 


          let Manu = []; 

          myData.map((item, index) => {
 
            return Manu.push({ ...item,id: index }); 
          });


        dispatch(getPostSuccess(Manu));
      })
      .catch((error) => {
        console.log("error: ", error);
        dispatch(getPostFailure(error.data));
      });
  };
};
