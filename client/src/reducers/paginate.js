import { Types } from "../actions/paginate";

const initPaginate = {
  page: 1,
  limit: 10,
  total: 10,
  pages: 1
}

const paginate = (state = initPaginate, action) => {
  switch (action.type) {
    case Types.SET_PAGE:
      return {
        ...state,
        page: action.page
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

export default paginate;