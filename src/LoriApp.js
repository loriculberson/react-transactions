import React, { Component } from 'react';
import './App.css';

function safeRound(amount) {
  return Math.floor(Number(amount)*100)/100
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      newTransaction: {
        name: '',
        amount: '',
        transaction: ''
      },
      currentBalance: 100.01,
      transactions: [
        {
          id: 1,
          name: 'lunch',
          amount: 7.06,
          transactionType: 'debit'
        },
        {
          id: 2,
          name: 'Home Depot purchase',
          amount: 83.96,
          transactionType: 'debit'
        },
        {
          id: 3,
          name: 'yard sell',
          amount: 340.00,
          transactionType: 'deposit'
        },
      ]
    }
  }

  transactionClick = (event) => {
    let currentBalance = this.state.currentBalance
    let newTransaction = Object.assign({}, this.state.newTransaction)
    let transactions = this.state.transactions.slice()
  
    newTransaction.transactionType = event.target.className
    newTransaction.id = transactions.length
  
    transactions.push(newTransaction)
  
    if (newTransaction.transactionType === 'deposit') {
      currentBalance += newTransaction.amount
    } else {
      currentBalance -= newTransaction.amount
    }
  
    newTransaction = {
      name: '',
      amount: '',
      transactionType: ''
    }
  
    this.setState({ currentBalance, newTransaction, transactions })
  }

  //add callback
  captureTransactionName= (event) => {
    //hey old state, I want you to 
    this.setState({ 
      newTransaction: { 
        ...this.state.newTransaction,
        name: event.target.value 
      }
    })
  }

  captureAmount = (event) => {
    this.setState({       
      newTransaction: { 
        ...this.state.newTransaction,
        amount: event.target.value 
      }
    })
  }


  render() {
//add a render related function inside the render()
  const renderTransactions = 
     this.state.transactions.map(transaction => 
     
      <div key={transaction.id} className= {'transactions'}>
        {transaction.transactionType} {transaction.name} {transaction.amount}
      </div>
    )
  
    if (!this.state.currentBalance) {
      return (
        <div className="error">
          <h3>Please check your credentials. We are unable to check your balance</h3>
        </div>
      )
    } else {
      return (
        <div className="App">
          <h3> The Account Balance is: ${this.state.currentBalance} </h3>
          <div className="newTransactions">
            <label>
              Name:
              <input
              value={this.state.newTransaction.name}
              onChange={this.captureTransactionName} 
             />
            </label>
            <label>
              Amount:
              <input
                value={this.state.newTransaction.amount}
                onChange={this.captureAmount}
              />
            </label>
            </div>
            <button className={'debit'} onClick={this.transitionClick}>Debit</button>
            <button className={'deposit'} onClick={this.transitionClick}>Deposit</button>
            {renderTransactions}
        </div>

      )
    }
  }
}

export default App;

