import React from 'react';

function Input() {
  return (
    <form className='input' onChange={(e) => e.preventDefault()}>
      <label htmlFor='search'>Search</label>
      <input type='text' placeholder='Search Color' />
    </form>
  );
}

export default Input;
