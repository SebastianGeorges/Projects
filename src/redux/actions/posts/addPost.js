import axios from "axios";
import { baseUrl } from "../../../utils/Constants";
import {
  addPostRequest,
  addPostSuccess,
  addPostFailure,
} from "../../types/posts/postsTypes";
import { getPost } from "./getPost";


export const addPosts = (
  postTitle,
  postSubtitle,
  postDescription,
  postPhoto,
  token
) => {
    return (dispatch) => {
        dispatch(addPostRequest());
  axios
    .post(
      `${baseUrl}/admins/add-post`,
      {
        postTitle: postTitle,
        postSubtitle: postSubtitle,
        postDescription: postDescription,
        postPhoto: postPhoto,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
        console.log("response", response.data);
        const data = response?.data;
        dispatch(addPostSuccess(data));
    })
    .catch((error) => {
        console.log("error: ", error);
        dispatch(addPostFailure(error?.response?.data?.error));
    })
    .finally(() => {
        dispatch(getPost(token));
    });
};
}