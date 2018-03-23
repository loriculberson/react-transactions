import React from 'react';
import TransactionInput from './TransactionInput';
import Button from './Button';

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

      <Button 
        className={'debit'}
        clickHander={props.transactionClick}
        buttonText={'Debit'}
      />

      <Button 
        className={'deposit'}
        clickHander={props.transactionClick}
        buttonText={'Deposit'}
      />
    </div>
  )

}

export default NewTransaction;