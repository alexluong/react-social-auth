import axios from 'axios';

import { getItem } from 'config/localStorage';

const getAPI = (url, token) => {
  if (token) {
    return axios.get(url, {
      headers: { authorization: token },
    });
  }
  return axios.get(url);
};

const postAPI = (url, body, requireToken) => {
  if (requireToken) {
    const token = getItem('accessToken');
    return axios.post(url, body, {
      headers: { authorization: token },
    });
  }
  return axios.post(url, body);
};

const postFormDataAPI = (url, body, requireToken) => {
  let config;
  if (requireToken) {
    const token = getItem('accessToken');
    config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: token,
      },
    };
  } else {
    config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
  }
  return axios.post(url, body, config);
};

export { getAPI, postAPI, postFormDataAPI };
