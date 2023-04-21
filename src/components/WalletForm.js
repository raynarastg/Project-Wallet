/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changedExpense, fetchCurrencies, fetchExpenses } from '../redux/actions';
import '../style/walletForm.css';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentação',
    };
  }

  componentDidMount = () => {
    const { currencies } = this.props;
    currencies();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { expensesConsumption } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const obj = { id, value, description, currency, method, tag };
    this.setState((prev) => (
      { id: prev.id + 1 }));
    this.setState({ value, description, currency, method, tag });
    expensesConsumption(obj);

    this.setState({ value: '', description: '' });
  }

  clickChange = () => {
    const { value, description, currency, method, tag } = this.state;
    const { updateExpense } = this.props;
    updateExpense({ value, description, currency, method, tag });
    this.setState({ value: '', description: '' });
  }

  render() {
    const { value, description } = this.state;
    const { wallet } = this.props;
    const { currencies, editor } = wallet;
    return (
      <div className="inputs-form">
        <div className="infos-expenses">
          <span>
            <p className="new-expense">Nova despesa</p>
          </span>
          <div className="inputs-selects">
            <label htmlFor="description" className="text">
              descrição
              <input
                type="textarea"
                data-testid="description-input"
                name="description"
                id="description"
                value={ description }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="tag" className="text">
              categoria
              <select
                data-testid="tag-input"
                name="tag"
                onChange={ this.handleChange }
                className="text selects"
              >
                <option>Alimentação</option>
                <option>Lazer</option>
                <option>Trabalho</option>
                <option>Transporte</option>
                <option>Saúde</option>
              </select>
            </label>
            <div className="payment">
              <label htmlFor="value" className="text">
                valor
                <input
                  type="textarea"
                  data-testid="value-input"
                  name="value"
                  id="value"
                  className="value-input"
                  value={ value }
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="currency" className="text">
                moeda
                <select
                  data-testid="currency-input"
                  name="currency"
                  onChange={ this.handleChange }
                  className="text moeda"
                >
                  {currencies.map((currencie) => (
                    <option key={ currencie }>{ currencie }</option>
                  ))}
                </select>
              </label>
            </div>
            <label htmlFor="select" className="text">
              {' '}
              forma de pagamento
              <select
                data-testid="method-input"
                name="method"
                onChange={ this.handleChange }
                className="text selects"
              >
                forma de pagamento
                <option>Dinheiro</option>
                <option>Cartão de crédito</option>
                <option>Cartão de débito</option>
              </select>
            </label>
          </div>
          {editor
            ? (<button type="button" onClick={ this.clickChange }>Editar</button>)
            : (
              <button
                type="submit"
                disabled={ !((value !== '' && description !== '')) }
                onClick={ this.handleClick }
              >
                Adicionar
                {' '}

              </button>)}

        </div>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.func.isRequired,
  expensesConsumption: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(),
    editor: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});
const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrencies()),
  expensesConsumption: (payload) => dispatch(fetchExpenses(payload)),
  updateExpense: (expense) => dispatch(changedExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
