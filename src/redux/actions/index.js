// Coloque aqui suas actions

export const LOGIN_EMAIL = 'LOGIN_EMAIL';

export const loginEmail = (payload) => ({
  type: LOGIN_EMAIL,
  email: payload,
});

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
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
