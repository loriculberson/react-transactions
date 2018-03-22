
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTransaction from './NewTransaction'

function safeRound(amount) {
  return Math.floor(Number(amount)*100)/100
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentBalance: 100.01,
      transactions: [
        {
          id: 1,
          name: "lunch",
          amount: 7.06,
          transactionType: "debit"
        },
        {
          id: 2,
          name: "Home Depot purchase",
          amount: 83.96,
          transactionType: "debit"
        },
        {
          id: 3,
          name: "yard sell",
          amount: 340.0,
          transactionType: "deposit"
        }
      ],
      newTransaction: {
        name: "",
        amount: "",
        transactionType: ""
      }
    };
  }

  // add callbacks here
  handleName = event => {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction,
        name: event.target.value
      }
    });
  };

  handleAmount = event => {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction,
        amount: event.target.value
      }
    });
  };

  transactionClick = event => {
    let currentBalance = this.state.currentBalance;
    let newTransaction = Object.assign({}, this.state.newTransaction);
    let transactions = this.state.transactions.slice();

    newTransaction.transactionType = event.target.className;
    newTransaction.id = transactions.length;

    transactions.push(newTransaction);

    if (newTransaction.transactionType === "deposit") {
      currentBalance += safeRound(newTransaction.amount);
    } else {
      currentBalance -= safeRound(newTransaction.amount);
    }

    newTransaction = {
      name: "",
      amount: "",
      transactionType: ""
    };

    this.setState({ currentBalance, newTransaction, transactions });
  };

  render() {
    const renderTransactions = this.state.transactions.map(txn => (
      <div key={txn.id} className="transactions">
        {txn.transactionType} of ${txn.amount} for {txn.name}
      </div>
    ));

    if (!this.state.currentBalance) {
      return (
        <div className="error">
          <h3>
            Please check your credentials. We are unable to check your balance
          </h3>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="showBalance">
            <h3> The Account Balance is: ${this.state.currentBalance.toFixed(2)} </h3>
            < NewTransaction 
              name={this.state.newTransaction.name} 
              value={this.state.newTransaction.value}
              handleName={this.handleName}
              handleAmount={this.handleAmount}
            />
            <button 
              onClick={this.transactionClick} 
              className="debit">
              Debit
            </button>
            <button 
              onClick={this.transactionClick} 
              className="deposit">
              Deposit</button>
            {renderTransactions}
          </div>
        </div>
      );
    }
  }
}

export default App;