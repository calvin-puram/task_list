import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Statement = () => {
  const { transactions } = useContext(GlobalContext);

  function total() {
    let expense = [];
    let income = [];
    transactions.map(trans => {
      if (trans.amount.startsWith("-")) {
        expense.push(trans.amount * 1);
      } else {
        income.push(trans.amount * 1);
      }
    });
    return {
      expense: expense.reduce((c, a) => c + a, 0),
      income: income.reduce((c, a) => c + a, 0)
    };
  }

  return (
    <div className='card mt-3 container'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='text-center pt-2'>
          Income
          <p className='text-success'>${total().income}</p>
        </div>

        <div className='text-center pt-2'>
          Expense
          <p className='text-danger'>-${Math.abs(total().expense)}</p>
        </div>
      </div>
    </div>
  );
};

export default Statement;
