// Coloque aqui suas actions

export const LOGIN_EMAIL = 'LOGIN_EMAIL';

const loginEmail = (payload) => ({
  type: LOGIN_EMAIL,
  email: payload,
});

export default loginEmail;
