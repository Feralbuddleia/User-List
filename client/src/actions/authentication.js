import axios from 'axios';

const Types = {
  SET_LOGIN_SUCC: 'SET_LOGIN_SUCC',
  SET_LOGIN_FAIL: 'SET_LOGIN_FAIL',
  SET_LOGIN_OUT: 'SET_LOGIN_OUT'
};

const setLoginSucc = user => ({
  type: Types.SET_LOGIN_SUCC,
  user
});

const setLoginFail = msg => ({
  type: Types.SET_LOGIN_FAIL,
  msg
});

const setLoginOut = msg => ({
  type: Types.SET_LOGIN_OUT
})


const userLogin = (login, password) => (dispatch, getState) => {
  const params = {
    login,
    password
  }
  axios.post('/users/login', params)
    .then(res => {
      const { status } = res.data; 
      if (status === 1) {
        //const { login, firstName } = res.data;
        dispatch(setLoginSucc(res.data));
      } else if (status === 0) {
        dispatch(setLoginFail('Password error'));
      } else {
        dispatch(setLoginFail('User login name error'));
      } 
    })
    .catch( err => {
      const { status, statusText } = err.response;
      dispatch(setLoginFail( status + " " + statusText));
    });
}

export { Types, userLogin, setLoginOut };