import React from "react";

const Statement = () => {
  return (
    <div className='card mt-3 container'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='text-center pt-2'>
          Income
          <p className='text-success'>$0.00</p>
        </div>

        <div className='text-center pt-2'>
          Expense
          <p className='text-danger'>$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Statement;
