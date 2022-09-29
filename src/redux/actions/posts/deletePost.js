import axios from "axios";
import { baseUrl } from "../../../utils/Constants";
import {
  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
} from "../../types/members/membersTypes";
import { getPost } from "./getPost";

export const deletePost = (postId, token) => {
  return (dispatch) => {
    dispatch(deletePostRequest());
    axios
    .delete(`${baseUrl}/admins/delete-post/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
        console.log(response.data.message);
        const data = response?.data;
        dispatch(deletePostSuccess(data));
    })
    .catch((error) => {
        console.log(error);
        dispatch(deletePostFailure(error?.response?.data?.error));
      })
    //   .finally(() => {
    //     dispatch(getPost(token));
    //   });
  };
};
