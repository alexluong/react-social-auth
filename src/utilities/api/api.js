import axios from 'axios';
import LocalStorage from '../LocalStorage';

const getToken = requireToken => {
  if (typeof requireToken === 'string') {
    return requireToken;
  }
  return LocalStorage.getItem('accessToken');
};

const getAPI = (url, requireToken) => {
  const config = {};
  if (requireToken) {
    const token = getToken(requireToken);
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return axios.get(url, config);
};

const postAPI = (url, body, requireToken) => {
  const config = {};
  if (requireToken) {
    const token = getToken(requireToken);
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return axios.post(url, body, config);
};

export { getAPI, postAPI };
