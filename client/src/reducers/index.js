import { combineReducers } from 'redux';
import users from './users';
import pagination from './pagination';
import search from './search';
import sort from './sort';
import authentication from './authentication';

const rootReducer = combineReducers({
  users,
  pagination,
  search,
  sort,
  authentication
});

export default rootReducer;