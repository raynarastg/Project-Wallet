import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions';
import '../style/table.css';

class Table extends Component {
  render() {
    const { expenses, dispatchExpenses } = this.props;
    return (
      <div className="tabela">
        <thead>
          <tr>
            <th style={ { width: '150px' } }>Descrição</th>
            <th style={ { width: '150px' } }>Categoria</th>
            <th style={ { width: '100px' } }>Método de pagamento</th>
            <th style={ { width: '100px' } }>Valor</th>
            <th style={ { width: '50px' } }>Moeda</th>
            <th>Moeda de conversão</th>
            <th style={ { width: '80px' } }>Câmbio utilizado</th>
            <th style={ { width: '100px' } }>Valor convertido</th>
            <th style={ { width: '100px' } }> </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((el) => (
            <tr key={ el.id }>
              <td style={ { maxWidth: '150px' } }>{el.description}</td>
              <td>{el.tag}</td>
              <td>{el.method}</td>
              <td style={ { maxWidth: '100px' } }>{Number(el.value).toFixed(2)}</td>
              <td>{el.currency}</td>
              <td>{el.exchangeRates[el.currency].name}</td>
              <td>{Number(el.exchangeRates[el.currency].ask).toFixed(2)}</td>
              <td style={ { maxWidth: '100px' } }>
                {(Number(el.value)
                * Number(el.exchangeRates[el.currency].ask)).toFixed(2)}
              </td>
              <td className="btns">
                <button
                  data-testid="delete-btn"
                  type="submit"
                  onClick={ () => {
                    dispatchExpenses(expenses.filter((index) => (
                      index.id !== el.id)));
                  } }
                >
                  <span className="material-symbols-outlined">
                    delete
                  </span>
                </button>
                <button
                  type="button"
                  data-testid="edit-btn"
                >
                  <span className="material-symbols-outlined">
                    edit_note
                  </span>
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
