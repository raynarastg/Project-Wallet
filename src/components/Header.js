import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <div>
        <p data-testid="email-field">

          {user.email}

        </p>
        <p data-testid="total-field">{price}</p>
        <p data-testid="header-currency-field">BRL</p>
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
