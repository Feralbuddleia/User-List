import { Types } from '../actions/search';

const initState = {
  content: ''
}


const search = (state = initState, action) => {
  switch (action.type) {
    case Types.SET_SEARCH:
      return {
        content: action.content
      };
    default:
      return state;
  }
}

export default search;