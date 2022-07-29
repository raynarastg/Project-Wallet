// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_EMAIL } from '../actions';

const INITIAL_STATE_LOGIN = {
  email: '',
};

const user = (state = INITIAL_STATE_LOGIN, action) => {
  switch (action.type) {
  case LOGIN_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
