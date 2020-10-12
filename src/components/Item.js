import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const Item = ({ id, charge, amount }) => {
  // const { id, charge, amount } = expense;
  return (
    <li>
      <div className='info'>
        <span className='expense'>{charge}</span>
        <span className='amount'>{amount}</span>
      </div>
      <div>
        <button className='edit-btn' aria-label='Edit button'>
          <MdEdit />
        </button>
        <button className='clear-btn' aria-label='Delete button'>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default Item;
