import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/table.css';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <theade>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </theade>
        <tbody>
          {expenses.map((el) => (
            <tr key={ el.id }>
              <td>{el.description}</td>
              <td>{el.currency}</td>
              <td>{el.method}</td>
              <td>{el.tag}</td>
              <td>{Number(el.value).toFixed(2)}</td>
              <td>{el.exchangeRates[el.currency].name}</td>
              <td>{Number(el.exchangeRates[el.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(el.value)
                * Number(el.exchangeRates[el.currency].ask)).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
