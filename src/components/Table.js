import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions';
import '../style/table.css';

class Table extends Component {
  render() {
    const { expenses, dispatchExpenses } = this.props;
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
              <td>
                <button
                  data-testid="delete-btn"
                  type="submit"
                  onClick={ () => {
                    dispatchExpenses(expenses.filter((index) => (
                      index.id !== el.id)));
                  } }
                >
                  Excluir

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}

Table.propTypes = {
  dispatchExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpenses: (expense) => dispatch(removeExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

// daniel rubens me auxiliou em direção ao filter  no button
