import React from 'react';
import { MdSend } from 'react-icons/md';

const Form = ({ charge, amount, handleAmount, handleCharge, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>Charge</label>
          <input
            type='text'
            name='charge'
            id='charge'
            className='form-control'
            placeholder='e.g. rent'
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Charge</label>
          <input
            type='number'
            name='amount'
            id='amount'
            className='form-control'
            placeholder='e.g. 100'
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type='submit' className='btn'>
        Submit <MdSend className='btn-icon' />
      </button>
    </form>
  );
};

export default Form;
