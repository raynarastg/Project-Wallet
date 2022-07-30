import { screen } from "@testing-library/react";
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
    // it('testa se ao clicar no button a rota é direcionada para carteira', () => {
    //   const { history } =  renderWithRouterAndRedux(<App />)
    //   const path = history.location.pathname;
    //   const buttonEntrar = screen.getAllByRole('button', { name: /entrar/i });
    //   userEvent.click(buttonEntrar);
    //   expect(path).toEqual('/carteira');
    // })
  })


