import {
  GET_MEMBERS_FAILURE,
  GET_MEMBERS_REQUEST,
  GET_MEMBERS_SUCCESS,
  ADD_MEMBER_REQUEST,
  ADD_MEMBER_SUCCESS,
  ADD_MEMBER_FAILURE,
  DELETE_MEMBER_REQUEST,
  DELETE_MEMBER_SUCCESS,
  DELETE_MEMBER_FAILURE,
} from "../../types/members/membersTypes";

// * Const
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
        members: [...action?.payload],
      };
    case GET_MEMBERS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: action?.payload?.error ? true : false,
          message: action?.payload?.message ? action?.payload?.message : '',
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
          status: action?.payload?.error ? true : false,
          message: action?.payload?.message ? action?.payload?.message : '',
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
      case DELETE_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: action?.payload?.error ? true : false,
          message: action?.payload?.message ? action?.payload?.message : '',
        },
        member: action?.payload?.member
      };
    case DELETE_MEMBER_FAILURE:
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
