import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import AccountList from "./AccountList";

const AccountDetails = () => {
  const { transactions, deleteItem } = useContext(GlobalContext);
  if (transactions.length > 0) {
    return (
      <>
        <h6 className='border-bottom mt-3 mb-2'>History</h6>
        <div className='card container '>
          <ul className='list-group my-3'>
            <AccountList transactions={transactions} deleteItem={deleteItem} />
          </ul>
        </div>
      </>
    );
  } else {
    return <div className='text-center my-4'>No History Yet...</div>;
  }
};

export default AccountDetails;
