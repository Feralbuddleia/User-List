import { Types } from '../actions/user';

const initState = {
  data: [],
  isLoading: false,
  error: '',
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
        data: action.docs,
        isLoading: false,
        error: ''
      };
    case Types.FAILURE:
      return {
        ...state,
        error: action.error,
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
      const data = state.data.map(user => (
        user._id === action.user._id 
          ? action.user 
          : user 
      ))
      return {
        ...state,
        data
      };
    default:
      return state;
  }
}

export default users;