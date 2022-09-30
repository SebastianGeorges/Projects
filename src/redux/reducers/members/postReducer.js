import { GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE, } from "../../types/members/postsTypes"

  const initialState = {
    loading: false,
    hasErrors: {
      status: false,
      message: "",
    },
    posts: [],
    post: {},
    postIdSelected: ''
  };

  export const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POSTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: [...action?.payload],
        };
      case GET_POSTS_FAILURE:
        return {
          ...state,
          loading: false,
          hasErrors: {
            status: action?.payload?.error ? true : false,
            message: action?.payload?.message ? action?.payload?.message : '',
          },
        };
      case ADD_POST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          hasErrors: {
            status: action?.payload?.error ? true : false,
            message: action?.payload?.message ? action?.payload?.message : '',
          },
          member: action?.payload?.member
        };
      case ADD_POST_FAILURE:
        return {
          ...state,
          loading: false,
          hasErrors: {
            status: true,
            message: action?.payload,
          },
        };
        case DELETE_POST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          hasErrors: {
            status: action?.payload?.error ? true : false,
            message: action?.payload?.message ? action?.payload?.message : '',
          },
          member: action?.payload?.member
        };
      case DELETE_POST_FAILURE:
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