import React, { useState } from 'react';

//Components
import Square from './Square';
import Input from './Input';

function App() {
  const [colorValue, setColorValue] = useState('');

  return (
    <div className='App'>
      <Square colorValue={colorValue} />
      <Input colorValue={colorValue} setColorValue={setColorValue} />
    </div>
  );
}

export default App;
