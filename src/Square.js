import React from 'react';

const Square = ({ colorValue }) => {
  return (
    <div className='square' style={{ backgroundColor: colorValue }}>
      <p>{colorValue ? colorValue : 'Waiting for Color!'}</p>
    </div>
  );
};

export default Square;
