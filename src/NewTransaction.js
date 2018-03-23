import React from 'react';

const NewTransaction = (props) => {  
// const NewTransaction = ({name, amount, handleName, handleAmount, transactionClick}) => {  

  return (
    <div className="newTransactions">
      <label>
        Name
        <input
          value={props.name}
          onChange={props.handleName}
        />
      </label>
      <label>
        Amount
        <input
          value={props.amount}
          onChange={props.handleAmount}
        />
      </label>
      <button 
              onClick={props.transactionClick} 
              className="debit">
              Debit
            </button>
            <button 
              onClick={props.transactionClick} 
              className="deposit">
              Deposit
              </button>
    </div>
  )

}

export default NewTransaction;