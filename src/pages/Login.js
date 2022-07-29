import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginEmail } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.login);
  }

  login = () => {
    const { email, password } = this.state;
    const seis = 6;
    const emailValidation = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;
    if (emailValidation.test(email) && password.length >= seis) {
      this.setState({ disabled: false });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { disabled, email, redirect } = this.state;
    const { enviaInfos } = this.props;
    return (
      <div>
        { redirect && (<Redirect to="/carteira" />) }
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            name="email"
            type="email"
            id="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            name="password"
            id="senha"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ disabled }
          onClick={ () => { enviaInfos(email); this.setState({ redirect: true }); } }
        >
          Entrar

        </button>
      </div>
    );
  }
}

Login.propTypes = {
  enviaInfos: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  enviaInfos: (payload) => dispatch(loginEmail(payload)),
});
export default connect(null, mapDispatchToProps)(Login);
