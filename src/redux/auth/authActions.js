// authActions.js

import {
    LOGIN,
    LOGOUT,
  } from './authConstants';
  
  // Action creator for login
  export const login = (user) => {
    return {
      type: LOGIN,
      payload: user
    };
  };
  
  // Action creator for logout
  export const logout = () => {
    return {
      type: LOGOUT
    };
  };
  
  