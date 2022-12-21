import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import '../style/wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-completed">
        <Header />
        <div className="page-wallet">
          <WalletForm />
          <Table />
        </div>
      </div>
    );
  }
}

export default Wallet;
