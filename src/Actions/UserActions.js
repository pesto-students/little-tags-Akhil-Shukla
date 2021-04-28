import * as actions from '../constants/actionTypes';

// user
export const setUser = data => {
    return {
      type: actions.SET_USER,
      data,
    };
  };
  export const addAddress = (data,id) => {
    return {
      type: actions.ADD_ADDRESS,
      payload : {data,id}
    };
  };
  
  export const removeAddress = id => {
    return {
      type: actions.REMOVE_ADDRESS,
      id,
    };
  };