import { combineReducers } from 'redux';
import users from './users';
import paginate from './paginate';
import conditions from './conditions';

const rootReducer = combineReducers({
  users,
  paginate,
  conditions
});

export default rootReducer;