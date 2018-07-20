import { Types } from "../actions/user";

const initState = {
  data: [],
  isLoading: false,
  message: ""
};

const users = (state = initState, action) => {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.docs,
        isLoading: false
      };
    case Types.FAILURE:
      return {
        ...state,
        message: action.error,
        isLoading: false
      };
    /*case Types.ADD:
      return {
        ...state,
        data: [
          ...state.data,
          action.user
        ]
      };*/
    case Types.UPDATE:
      const data = state.data.map(
        user => (user._id === action.user._id ? action.user : user)
      );
      return {
        ...state,
        data
      };
    case Types.SET_MSG:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};

export default users;
