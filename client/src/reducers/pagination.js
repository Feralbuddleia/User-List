import { Types } from "../actions/pagination";

const initState = {
  page: 1,
  limit: 10,
  total: 10,
  pages: 1
}

const pagination = (state = initState, action) => {
  switch (action.type) {
    case Types.SET_PAGE_INC:
      return {
        ...state,
        page: state.page + 1
      };
    case Types.SET_PAGE_DEC:
      return {
        ...state,
        page: state.page - 1
      };
    case Types.SET_PAGE_INIT:
      return {
        ...state,
        page: 1
      };
    case Types.SET_PAGES:
      return {
        ...state,
        total: action.total,
        pages: action.pages
      }
    default:
      return state;
  }
}

export default pagination;