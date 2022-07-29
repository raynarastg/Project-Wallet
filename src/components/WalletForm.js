import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount = () => {
    const { currencies } = this.props;
    currencies();
  }

  render() {
    // const retorno = fetchCurrencies();
    const { wallet } = this.props;
    const { currencies } = wallet;
    return (
      <div>
        <input
          type="textarea"
          data-testid="value-input"
        />
        <input
          type="textarea"
          data-testid="description-input"
        />
        <select data-testid="currency-input">
          {currencies.map((currencie) => (
            <option key={ currencie }>{ currencie }</option>

          ))}
        </select>
        <select data-testid="method-input">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});
const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
