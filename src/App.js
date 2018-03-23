import React, { Component } from 'react';
import './App.css';
import NewTransaction from './NewTransaction';
import Transaction from './Transaction';

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
    newTransaction.id = transactions.length + 1;

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

//
    const renderTransactions = this.state.transactions.map(txn => (
      <Transaction 
        key={txn.id}
        name={txn.name}
        amount={txn.amount}
        transactionType={txn.transactionType}
      />
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
              amount={this.state.newTransaction.amount} 
              newTransaction={this.state.newTransaction}
              handleName={this.handleName}
              handleAmount={this.handleAmount}
              transactionClick={this.transactionClick}
            />
           {/* <Transaction 
            allTransactions={this.state.transactions}
          /> */}

          {renderTransactions}
          </div>
     
        </div>
      );
    }
  }
}

export default App;