import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies, fetchExpenses } from '../redux/actions';

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
    // laura lana me auxiliou nessa parte
    this.setState((prev) => (
      { id: prev.id + 1 }));
    this.setState({ value, description, currency, method, tag });
    expensesConsumption(obj);
    this.setState({ value: '', description: '' });
  }

  render() {
    const { value, description } = this.state;
    const { wallet } = this.props;
    const { currencies } = wallet;
    return (
      <div>
        <input
          type="textarea"
          data-testid="value-input"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <input
          type="textarea"
          data-testid="description-input"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <select
          data-testid="currency-input"
          name="currency"
          onChange={ this.handleChange }
        >
          {currencies.map((currencie) => (
            <option key={ currencie }>{ currencie }</option>
          ))}
        </select>
        <select data-testid="method-input" name="method" onChange={ this.handleChange }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input" name="tag" onChange={ this.handleChange }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar despesa

        </button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.func.isRequired,
  expensesConsumption: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});
const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrencies()),
  expensesConsumption: (payload) => dispatch(fetchExpenses(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
