import React from 'react';

const NewTransaction = (props) => {  

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
    </div>
  )

}

export default NewTransaction;