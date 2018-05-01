import { GET_USER } from '../config/types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;