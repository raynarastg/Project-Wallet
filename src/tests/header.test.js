import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from "../App";
import { renderWithRouterAndRedux } from './helpers/renderWith';
describe('testa pagina login', () => {
  it('testa se a rota é home', () => {
    const { history } = renderWithRouterAndRedux(<App />)
    expect(history.location.pathname).toEqual('/');
    
    const emailValidation = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;

    const inputEmail = screen.getByTestId('email-input');
    userEvent.type(inputEmail, 'teste@teste.com');
    
    const verificaEmailValido = emailValidation.test(inputEmail.value);
    expect(verificaEmailValido).toBeTruthy();

    const buttonEntrar = screen.getByRole('button', { name: /entrar/i });

    const inputSenha = screen.getByTestId('password-input')
    userEvent.type(inputSenha, '123456')
    expect(buttonEntrar).toHaveProperty('disabled', false);
    userEvent.click(buttonEntrar)
    const path = history.location.pathname;
    expect(path).toEqual('/carteira');
  })

  // it('', () => {
  //   renderWithRouterAndRedux(<App />)
  //   const user = screen.getByTestId('email-field')
  //   expect(user).toBeDefined()
  // })
})