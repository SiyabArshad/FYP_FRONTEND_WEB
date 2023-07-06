// authReducer.js

import {
    LOGIN,
    LOGOUT
  } from './authConstants';
  
  // Retrieve user data from local storage, if available
  const storedUser = JSON.parse(localStorage.getItem('digischool'));
  
  const initialState = {
    currentUser: storedUser || null,
    isAuthenticated: !!storedUser
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        // Save the user data to local storage
        localStorage.setItem('digischool', JSON.stringify(action.payload));
        return {
          ...state,
          currentUser: action.payload,
          isAuthenticated: true
        };
      case LOGOUT:
        // Remove the user data from local storage
        localStorage.removeItem('digischool');
        return {
          ...state,
          currentUser: null,
          isAuthenticated: false
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  