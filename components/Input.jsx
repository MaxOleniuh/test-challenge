import React from 'react'
import { BsSearch } from 'react-icons/bs';

const Input = () => {
  return (
    <div className="input-group">
  <input
    type="text"
    className="p-2 input rounded"
    placeholder="Enter your search here..."
    aria-describedby="basic-addon2"
      />
       <button className='input-btn button'>
              <BsSearch className='input-icon' />
            </button>
</div>
  )
}

export default Input;