import {
    GET_POST_FAILURE,
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
  } from "../../types/posts/postsTypes";
  
  // * Const
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
  
  export const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        
        // ? GET

      case GET_POST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: [...action?.payload],
        };
      case GET_POST_FAILURE:
        return {
          ...state,
          loading: false,
          hasErrors: {
            status: action?.payload?.error ? true : false,
            message: action?.payload?.message ? action?.payload?.message : '',
          },
        };

        //  * ADD


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

        // ! DELETE

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
          post: action?.payload?.member
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
  