// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  CHANGED_EXPENSE,
  EDIT_EXPENSE,
  EXPENSES_CONSUMPTION, FETCH_CURRENCIES,
  REMOVE_EXPENSE,
} from '../actions';

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

  case EXPENSES_CONSUMPTION:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [...action.remove],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.id,
    };
  case CHANGED_EXPENSE:
    return {
      ...state,
      editor: false,
      expenses: state.expenses.map((obj) => {
        if (obj.id === state.idToEdit) {
          return { id: obj.id, ...action.expenses, exchangeRates: obj.exchangeRates };
        }
        return obj;
      }),
    };
  default:
    return state;
  }
};
export default wallet;
