// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_CURRENCIES } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
};
export default wallet;
