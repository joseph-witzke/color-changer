import React from 'react';
import colorNames from 'colornames';

function Input({ colorValue, setColorValue, setHexValue }) {
  return (
    <form className='input' onChange={(e) => e.preventDefault()}>
      <label htmlFor='search'>Search</label>
      <input
        autoFocus
        type='text'
        placeholder='Search Color'
        value={colorValue}
        required
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  );
}

export default Input;
