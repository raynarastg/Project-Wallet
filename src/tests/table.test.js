import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';
describe('testa pagina login', () => {
  it('testa se a rota é home', () => {
    renderWithRouterAndRedux(<Wallet />)
    const inputValor = screen.getByTestId('value-input');
    userEvent.type(inputValor
    , 15)
    expect(15).toBeDefined();
    const inputDescrição = screen.getByTestId('description-input');
    userEvent.type(inputDescrição
    , 'salgado')
    expect('salgado').toBeDefined();
  })
})