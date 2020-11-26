import * as actionTypes from '../actions/actionTypes';

const initialState = {
  auth: false,
  user: '',
  token: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      localStorage.setItem('chanceeToken', action.token);
      return {
        ...state,
        auth: true,
        user: action.user,
        token: action.token,
      };
    case actionTypes.LOGOUT:
      localStorage.removeItem('chanceeToken');
      return {
        ...state,
        auth: false,
        user: '',
        token: '',
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
