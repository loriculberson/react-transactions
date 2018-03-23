import React from 'react';
import TransationInput from './TransactionInput';
import TransactionInput from './TransactionInput';

const NewTransaction = (props) => {  
// const NewTransaction = ({name, amount, handleName, handleAmount, transactionClick}) => {  

  return (
    <div className="newTransactions">
    <TransactionInput 
      label={"Name"}
      transactionValue={props.name}
      stateHandler={props.handleName}
      type={"text"}
    />

    <TransactionInput 
      label={"Amount"}
      transactionValue={props.amount}
      stateHandler={props.handleAmount}
      type={"text"}
    />

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