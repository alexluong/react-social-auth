import axios from 'axios';
import LocalStorage from '../LocalStorage';

const getAPI = (url, requireToken) => {
  const config = {};
  if (requireToken) {
    const token = LocalStorage.getItem('accessToken');
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return axios.get(url, config);
};

const postAPI = (url, body, requireToken) => {
  const config = {};
  if (requireToken) {
    const token = LocalStorage.getItem('accessToken');
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return axios.post(url, body, config);
};

export { getAPI, postAPI };
