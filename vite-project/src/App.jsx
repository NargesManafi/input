import React, { useState } from 'react';

import CountComponent from './components/Text';
import InputComponent from './components/Input'

function App() {
  const [count, setCount] = useState(0);

  const handleInputChange = (valueLength) => {
    setCount(valueLength);
  };

  return (
    <div>
      <InputComponent onInputChange={handleInputChange} />
      <CountComponent count={count} />
    </div>
  );
}

export default App;