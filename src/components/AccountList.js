import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AccountList = () => {
  const { transactions } = useContext(GlobalContext);

  return transactions.map(trans => {
    return (
      <li
        className='list-group-item my-1'
        key={trans.id}
        style={{
          borderRight: trans.amount < 0 ? "2px solid red" : "2px solid green"
        }}
      >
        <button className='btn btn-danger btn-sm rounded-50 float-left'>
          X
        </button>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='ml-5'>{trans.text}</p>
          <p>
            {trans.amount < 0 ? "-" : ""}${Math.abs(trans.amount).toFixed(2)}
          </p>
        </div>
      </li>
    );
  });
};
export default AccountList;
