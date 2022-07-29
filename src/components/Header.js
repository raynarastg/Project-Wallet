import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p data-testid="email-field">

          {user.email}

        </p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Header);
