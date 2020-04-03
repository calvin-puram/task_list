import React from "react";
import AccountList from "./AccountList";

const AccountDetails = () => {
  return (
    <>
      <h6 className='border-bottom mt-3 mb-2'>History</h6>
      <div className='card container '>
        <ul className='list-group my-3'>
          <AccountList />
        </ul>
      </div>
    </>
  );
};

export default AccountDetails;
