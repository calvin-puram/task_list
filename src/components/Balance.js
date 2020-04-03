import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const total = () => {
    const amount = transactions.map(trans => trans.amount * 1);
    return amount.reduce((c, a) => c + a, 0);
  };

  return (
    <div className='card text-center mt-5'>
      <div className='pt-2'>
        <h4>Your Balance</h4>
        <p>${total()}</p>
      </div>
    </div>
  );
};

export default Balance;
