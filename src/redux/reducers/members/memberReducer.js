import {
  GET_MEMBERS_FAILURE,
  GET_MEMBERS_REQUEST,
  GET_MEMBERS_SUCCESS,
  ADD_MEMBER_REQUEST,
  ADD_MEMBER_SUCCESS,
  ADD_MEMBER_FAILURE,
} from "../../types/members/membersTypes";

const initialState = {
  loading: false,
  hasErrors: {
    status: false,
    message: "",
  },
  members: [],
  member: {},
  memberIdSelected: ''
};

export const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMBERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: {
          message: "",
          status: false,
        },
        members: [...action?.payload],
      };
    case GET_MEMBERS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: true,
          message: action?.payload?.message,
        },
      };
    case ADD_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: false,
          message: '',
        },
        member: action?.payload?.member
      };
    case ADD_MEMBER_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: true,
          message: action?.payload,
        },
      };
    default:
      return state;
  }
};
