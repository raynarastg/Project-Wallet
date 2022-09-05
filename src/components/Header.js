import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/header.css';
import userIcon from '../style/user.png';
import carteira from '../style/wallet.png';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      price: 0,
    };
  }

  sumValorTotal = () => {
    const { expenses } = this.props;
    const { price } = this.state;
    let sumValue = 0.00;
    if (expenses) {
      expenses.forEach((el) => {
        const value = Number(el.value) * Number(el.exchangeRates[el.currency].ask);
        sumValue += value;
      });
      if (price !== sumValue.toFixed(2)) {
        this.setState({ price: sumValue.toFixed(2) });
      }
    }
  }

  render() {
    const { user } = this.props;
    const { price } = this.state;

    this.sumValorTotal();
    return (
      <div className="text-header">
        <div className="header-wrapper">

          <div className="text_emoji">
            <div>
              <span className="text-trybe">Trybe</span>
              <span className="text-wallet">Wallet</span>
            </div>
            <img src={ carteira } alt="carteira" />
          </div>
          <div className="box-infos">
            <div className="user-infos">
              <p data-testid="email-field" className="email-user">
                {user.email}
              </p>
              <img
                src={ userIcon }
                alt="userIcon"
                className="img-user"
              />
            </div>
            <div className="linha-vertical"> </div>
            <div>
              <p className="text-despesas">Suas despesas</p>
              <span
                data-testid="total-field"
                className="price-moeda"
              >
                {price}
              </span>
              <span
                data-testid="header-currency-field"
                className="price-moeda"
              >
                BRL

              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  expenses: PropTypes.shape({
    forEach: PropTypes.func,
  }).isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Header);
