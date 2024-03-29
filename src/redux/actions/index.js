export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const EXPENSES_CONSUMPTION = 'EXPENSES_CONSUMPTION';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const CHANGED_EXPENSE = 'CHANGED_EXPENSE';

export const loginEmail = (payload) => ({
  type: LOGIN_EMAIL,
  email: payload,
});

const getCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES,
  currencies,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currencies = Object.keys(data).filter((el) => el !== 'USDT');
    dispatch(getCurrencies(currencies));
  };
}

const expenseConsumption = (expenses) => ({
  type: EXPENSES_CONSUMPTION,
  expenses,
});

export function fetchExpenses(payload) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(expenseConsumption({ ...payload, exchangeRates: data }));
  };
}

export const removeExpense = (expense) => ({
  type: REMOVE_EXPENSE,
  remove: expense,
});

export const editExpense = (id) => ({
  type: EDIT_EXPENSE,
  id,
});

export const changedExpense = (expenses) => ({
  type: CHANGED_EXPENSE,
  expenses,
});
