import React from "react";

const AccountDetails = () => {
  return (
    <>
      <h6 className='border-bottom mt-3 mb-2'>History</h6>
      <div className='card container '>
        <ul className='list-group my-3'>
          <li className='list-group-item my-1'>
            <div className='d-flex justify-content-between align-items-center'>
              <p>Salary</p>
              <p>-$300.00</p>
            </div>
          </li>

          <li className='list-group-item my-1'>
            <div className='d-flex justify-content-between align-items-center'>
              <p>Salary</p>
              <p>-$300.00</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountDetails;
