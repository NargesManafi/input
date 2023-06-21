import React from 'react';

function CountComponent({ count }) {
  return (
    <div>
      <p>Number of characters: {count}</p>
    </div>
  );
}

export default CountComponent;