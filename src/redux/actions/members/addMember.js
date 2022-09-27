import axios from "axios";
import { baseUrl } from "../../../utils/Constants";
import {
  addMemberRequest,
  addMemberSuccess,
  addMemberFailure,
} from "../../types/members/membersTypes";
import {getMembers} from './getMembers.js'

export const addMember = (
  email,
  password,
  firstName,
  lastName,
  linkedIn,
  facebook,
  avatar,
  token
) => {
  return (dispatch) => {
    dispatch(addMemberRequest());
    axios
      .post(
        `${baseUrl}/admins/add-member`,
        {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          linkedIn: linkedIn,
          facebook: facebook,
          avatar: avatar,
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
        dispatch(addMemberSuccess(data));
      })
      .catch((error) => {
        console.log("error: ", error);
        return dispatch(addMemberFailure(error?.message));
      })
  };
};
