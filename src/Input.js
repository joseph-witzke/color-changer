import React from 'react';

function Input({ colorValue, setColorValue }) {
  return (
    <form className='input' onChange={(e) => e.preventDefault()}>
      <label htmlFor='search'>Search</label>
      <input
        autoFocus
        type='text'
        placeholder='Search Color'
        value={colorValue}
        required
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
}

export default Input;
