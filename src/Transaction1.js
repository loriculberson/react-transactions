import React from 'react';

const Transaction = (props) => {
  return (
    <div key={props.id} className="transaction">
    {props.transactionType} of ${props.amount} for {props.name}
  </div>
  )
}

export default Transaction;

//TransactionList
// import React from 'react';

// const Transaction = (props) => {
//   return (
//     props.allTransactions.map((transaction) =>{
//       return <div key={transaction.id} className="transaction">
//         {transaction.transactionType} of ${transaction.amount} for {transaction.name}
//       </div>
//     })
//   )
// }

// export default Transaction;