import axios from 'axios';
import { setPageInit, setPages } from './pagination';
import { setSearch } from './search';
import { setSort } from './sort';

const requestStart = () => ({
  type: Types.REQUEST
});

const setUserData = docs => ({
  type: Types.SUCCESS,
  docs
});

const handleFailure = error => ({
  type: Types.FAILURE,
  error
});

const setUpdate = user => ({
  type: Types.UPDATE,
  user
});

const setMsg = message => ({
  type: Types.SET_MSG,
  message
});

const getUserData = () => {
  return (dispatch, getState) => {
    dispatch(requestStart);
    const {pagination, search, sort} = getState();
    const {page, limit} = pagination;
    const query = {
      page,
      limit
    }
    
    if (search) {
      query.search = search.content;
    }
    if (sort.field) {
      query.sort = {
        [sort.field]: sort.asc
      }
    }
    axios.get('/users', { params: query })
      .then(res => {
        dispatch(setUserData(res.data.docs));
        dispatch(setPages(res.data.pages, res.data.total));
      })
      .catch(err => {
        handleFailure(err);
      })
  }
}

const addNewUser = (user) => {
  return (dispatch, getState) => {
    axios.post('/users/add', user)
      .then(res => {
        dispatch(setPageInit());
        dispatch(setSearch());
        dispatch(setSort());
        dispatch(setMsg("Add User Successfully"));
      })
      .catch(err => {
        handleFailure(err);
      })
  }
}

const updateUser = (user) => {
  return (dispatch, getState) => {
    axios.put(`/users/update/${user.login}`, user)
      .then(res => {
        dispatch(setUpdate(user));
        dispatch(setMsg('Update User Successfully!'));
      })
      .catch(err => {
        handleFailure(err);
      })
  }
}

const deleteUser = (login) => {
  return (dispatch, getState) => {
    axios.delete(`/users/delete/${login}`)
      .then(res => {
        dispatch(getUserData());
        dispatch(setMsg('Delete User Successfully!'));
      })
      .catch(err => {
        handleFailure(err);
      });
  }
}

const Types = {
  REQUEST: 'FETCH_DATA_REQUEST',
  SUCCESS: 'FETCH_DATA_SUCCESS',
  FAILURE: 'FETCH_DATA_FAILURE',
  ADD: 'ADD_USER',
  UPDATE: 'UPDATE_USER',
  DELETE: 'DELETE_USER',
  SET_MSG: 'SET_MSG'
}

export {Types, addNewUser, getUserData, updateUser, deleteUser, setMsg};
