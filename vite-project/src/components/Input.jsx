// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const TextInput = ({value,onChange}) => {
  return (
    <input type="text" value={value} onChange={onChange} />
  );
}

export default TextInput;