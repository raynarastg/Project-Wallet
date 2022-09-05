import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from "../App";
import Wallet from '../pages/Wallet';
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

  it('testa se é renderizado um campo com email do usuario, total e a moeda', () => {
    renderWithRouterAndRedux(<Wallet />)
    const user = screen.getByTestId('email-field')
    expect(user).toBeDefined()
    const total = screen.getByTestId('total-field')
    expect(total).toBeDefined()
    const currency = screen.getByTestId('header-currency-field')
    expect(currency).toBeDefined()
  })
  it('testa se os inputs para valor, descrição, moeda, método e despesa são renderizados', () => {
    renderWithRouterAndRedux(<Wallet />)
    const inputValue = screen.getByTestId('value-input')
    expect(inputValue).toBeDefined()
    const inputDescription = screen.getByTestId('description-input')
    expect(inputDescription).toBeDefined()
    const inputCurrency = screen.getByTestId('currency-input')
    expect(inputCurrency).toBeDefined()
    const inputMethod = screen.getByTestId('method-input')
    expect(inputMethod).toBeDefined()
    const inputTag = screen.getByTestId('method-input')
    expect(inputTag).toBeDefined()
    const buttonAdd = screen.getByText(/adicionar despesa/i)
    expect(buttonAdd).toBeDefined()
  })
  it('confere se os dados da tabela é renderizado', () => {
    renderWithRouterAndRedux(<Wallet />)
    const textDescription = screen.getByText(/descrição/i)
    expect(textDescription).toBeDefined()
    const textTag = screen.getByText(/tag/i)
    expect(textTag).toBeDefined()
    const textMethod = screen.getByText(/método de pagamento/i)
    expect(textMethod).toBeDefined()
    const textValue = screen.getAllByText(/valor/i)
    expect(textValue[0]).toBeDefined()
    const textCambio= screen.getByText(/câmbio utilizado/i)
    expect(textCambio).toBeDefined()
    const textValueConverted = screen.getByText(/valor convertido/i)
    expect(textValueConverted).toBeDefined()
    const textCurrency = screen.getByText(/moeda de conversão/i)
    expect(textCurrency).toBeDefined()
    const textEditExcluir = screen.getByText('Editar/Excluir')
    expect(textEditExcluir).toBeDefined()
  })

  it('verifica se um h1 com o texto trybewallet é renderizado', () => {
    renderWithRouterAndRedux(<Wallet />)
    const h1 = screen.getByRole('heading', { name: /trybeWallet/i })
    expect(h1).toBeInTheDocument()
  })
})