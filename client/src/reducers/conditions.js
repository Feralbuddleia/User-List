import { Types, initSort } from '../actions/conditions';

const initState = {
  search: '',
  sort: initSort
}


const conditions = (state = initState, action) => {
  switch (action.type) {
    case Types.SET_SEARCH:
      return {
        search: action.search,
        sort: initSort
      };
    case Types.SET_SORT:
      const {field, asc} = state.sort;
      return {
        ...state,
        sort: {
          field: action.field,
          asc: (field === action.field) ? -1 * asc : 1
        }
      }
    default:
      return state;
  }
}

export default conditions;