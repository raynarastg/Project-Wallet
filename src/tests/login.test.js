import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from "../App";
import { renderWithRouterAndRedux } from './helpers/renderWith';
  describe('testa pagina login', () => {
  it('testa se a rota é home', () => {
    const { history } =  renderWithRouterAndRedux(<App />)
    const path = history.location.pathname;
    expect(path).toEqual('/');
  })
  it('testa se existe um input email', () => {
      renderWithRouterAndRedux(<App />)
    const inputEmail = screen.getAllByTestId('email-input')
    expect(inputEmail).toBeDefined();
  })
  it('testa se existe um input senha', () => {
    renderWithRouterAndRedux(<App />)
  const inputSenha = screen.getAllByTestId('password-input')
  expect(inputSenha).toBeDefined();
  })
  it('testa se existe um button com o texto Entrar', () => {
    renderWithRouterAndRedux(<App />)
    const buttonEntrar = screen.getAllByRole('button', { name: /entrar/i });
    expect(buttonEntrar).toBeDefined();
  })
    it('testa se o button abilita ao preencher os campos input', () => {
      // https://testing-library.com/docs/ecosystem-user-event/
      const { history } = renderWithRouterAndRedux(<App />)
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
  })
