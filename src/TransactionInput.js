import React from 'react';

const TransactionInput = (props) => {
  return (
    <div>
      <label>
        {props.label}
        <input
          value={props.transactionValue}
          onChange={props.stateHandler}
          type={props.type}
        />
      </label>


    </div>
  )
}

export default TransactionInput;

