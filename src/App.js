import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
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



  render() {
//add a render related function inside the render()
  const renderTransactions = 
     this.state.transactions.map(transaction => 
     
      <div key={transaction.id} className= {'transactions'}>
        {transaction.name} 
        {transaction.amount}
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
              Transaction
              <input />
            </label>
            </div>
            <button>Debit</button> <button>Deposit</button>
            {renderTransactions}
        </div>

      )
    }
  }
}

export default App;