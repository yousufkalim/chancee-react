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
      localStorage.removeItem('chancee');
      return {
        ...state,
        auth: false,
        user: '',
        token: '',
      };
    default:
      return state;
  }
};

export default reducer;
