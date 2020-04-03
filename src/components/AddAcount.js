import React, { useState } from "react";

const AddAcount = () => {
  const [fields, setFields] = useState({ text: "", account: "" });

  return (
    <div>
      <h6 className='border-bottom mt-3 mb-2'>Add Account Info</h6>
      <form>
        <div className='form-group'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Text'
            id='text'
            value={fields.text}
            onChange={e => setFields({ ...fields, text: e.target.value })}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='account'>
            Account Info (negative-Expense & positive-Income)
          </label>
          <input
            type='number'
            className='form-control'
            placeholder='Enter Account Details...'
            id='account'
            value={fields.account}
            onChange={e => setFields({ ...fields, account: e.target.value })}
          />
        </div>

        <button type='submit' className='btn btn-primary btn-block'>
          Add Account
        </button>
      </form>
    </div>
  );
};

export default AddAcount;
