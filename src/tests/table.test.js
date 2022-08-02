import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Wallet from '../pages/Wallet';
import { mockCurrencies, mockExpenses } from './helpers/mockData';
import { renderWithRouterAndRedux } from './helpers/renderWith';
const initialState = {
  wallet: {
    currencies: mockCurrencies,
    expenses: mockExpenses,
    editor: false,
    idToEdit: 0,
  }
}
describe('testa table', () => {
  it('testa se table é renderizada', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState })
    expect(screen.getByRole('cell', { name: 'descrição1' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Alimentação' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Dinheiro' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '75.00' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'CAD' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'descrição2' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Lazer' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: '40.00' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Cartão de Crédito' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'EUR' })).toBeInTheDocument();
  })

  it('', () => {
    renderWithRouterAndRedux(<Wallet />)

    const button = screen.getByRole('button', /adicionar despesa/i)
    userEvent.click(button)
    const buttonExcluir = screen.getByRole('button', /excluir/i)
    expect(buttonExcluir).toBeInTheDocument()

    const select = screen.getAllByRole('combobox')
    expect(select).toBeDefined()

    const selectTag = screen.getAllByRole('combobox')
    expect(selectTag).toBeDefined()

    const inputDescription = screen.getByTestId('description-input')
    expect(inputDescription.value).toBeDefined();

    const input = screen.getByTestId('value-input')
    userEvent.type(input, 'roupa')
    userEvent.click(button)
    expect(input.value).toBeDefined();
    userEvent.click(buttonExcluir)
    expect("").toBeDefined();
  })
})