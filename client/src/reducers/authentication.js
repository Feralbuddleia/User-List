import { Types } from "../actions/authentication";

const initState = {
  loginInfo: null,
  error: ""
};

const authentication = (state = initState, action) => {
  switch (action.type) {
    case Types.SET_LOGIN_SUCC:
      return {
        ...state,
        loginInfo: action.user,
        error: ""
      };
    case Types.SET_LOGIN_FAIL:
      return {
        ...state,
        error: action.msg
      };
    case Types.SET_LOGIN_OUT:
      return {
        ...state,
        loginInfo: null,
        error: ""
      };
    default:
      return state;
  }
};

export default authentication;
