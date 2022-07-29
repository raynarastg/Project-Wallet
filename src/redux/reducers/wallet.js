// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  default:
    return state;
  }
};
export default wallet;
