import axios from 'axios';

const getAPI = (url, token) => {
  if (token) {
    return axios.get(url, {
      headers: { authorization: token },
    });
  }
  return axios.get(url);
};

const postAPI = (url, body, token) => {
  if (token) {
  }
  return axios.post(url, body);
};

export { getAPI, postAPI };
