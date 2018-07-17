import axios from 'axios';
import { setPage, setPages } from './paginate';
import { setSearch, setSort } from './conditions';

const requestStart = () => ({
  type: Types.REQUEST
});

const setUserData = (docs) => ({
  type: Types.SUCCESS,
  docs
});

const handleFailure = (error) => ({
  type: Types.FAILURE,
  error
});

const setUpdate = (user) => ({
  type: Types.UPDATE,
  user
});

const getUserData = () => {
  return (dispatch, getState) => {
    dispatch(requestStart);
    const {paginate, conditions} = getState();
    const {page, limit} = paginate;
    const {search, sort} = conditions;
    const query = {
      page,
      limit
    }
    
    if (search) {
      query.search = search;
    }
    if (sort.field) {
      query.sort[sort.field] = sort.asc;
    }
    axios.get('/users', { params: query })
      .then(res => {
        console.log(res.data);
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
        dispatch(setPage());
        dispatch(setSearch());
        dispatch(setSort());
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
  DELETE: 'DELETE_USER'
}

export {Types, addNewUser, getUserData, updateUser, deleteUser};
