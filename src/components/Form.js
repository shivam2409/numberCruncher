import React from 'react';
import { MdSend } from 'react-icons/md';

const Form = () => {
  return (
    <form action=''>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>Charge</label>
          <input
            type='text'
            name='charge'
            id='charge'
            className='form-control'
            placeholder='e.g. rent'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Charge</label>
          <input
            type='text'
            name='amount'
            id='amount'
            className='form-control'
            placeholder='e.g. 100'
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
