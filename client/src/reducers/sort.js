import { Types } from "../actions/sort";

const initState = {
  field: "",
  asc: 1
};

const sort = (state = initState, action) => {
  switch (action.type) {
    case Types.SET_SORT:
      return {
        field: action.field,
        asc: state.field === action.field ? -1 * state.asc : 1
      };
    default:
      return state;
  }
};

export default sort;
