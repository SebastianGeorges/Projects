// GET
export const GET_MEMBERS_REQUEST = 'GET_MEMBERS_REQUEST';
export const GET_MEMBERS_SUCCESS = 'GET_MEMBERS_SUCCESS';
export const GET_MEMBERS_FAILURE = 'GET_MEMBERS_FAILURE';

// ADD
export const ADD_MEMBER_REQUEST = 'ADD_MEMBER_REQUEST';
export const ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS';
export const ADD_MEMBER_FAILURE = 'ADD_MEMBER_FAILURE';


// GET 
export const getMembersRequest = () => { // before axios call request
  return {
    type: GET_MEMBERS_REQUEST
  }
};

export const getMembersSuccess = (response) => { // status code 200
  return {
    type: GET_MEMBERS_SUCCESS,
    payload: response
  }
};

export const getMembersFailure = (error) => {
  return {
    type: GET_MEMBERS_FAILURE,
    payload: error
  }
};


// ADD
export const addMemberRequest = () => { // before axios call request
  return {
      type: ADD_MEMBER_REQUEST
  }
}

export const addMemberSuccess = (response) => { // status code 201
  return {
      type: ADD_MEMBER_SUCCESS,
      payload: response
  }
}

export const addMemberFailure = (error) => { // status code 4XX
  return {
      type: ADD_MEMBER_FAILURE,
      payload: error
  }
}
