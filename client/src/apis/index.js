import axios from 'axios';

const getUserByLogin = login => {
  return axios.get(`/users/${login}`);
}

export { getUserByLogin };