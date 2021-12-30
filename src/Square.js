import React from 'react';

const Square = ({ colorValue, hexValue }) => {
  return (
    <div className='square' style={{ backgroundColor: colorValue }}>
      <p>{colorValue ? colorValue : 'Waiting for Color!'}</p>
      <p>{hexValue}</p>
    </div>
  );
};

export default Square;
