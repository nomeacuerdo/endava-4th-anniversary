import React from 'react';

import Column1 from '../styled-components/column1';

const TextSubmit = () => {
  return (
    <Column1>
      <h2>Send your message!</h2>
      <textarea placeholder="Enter your message here!" />
      <button>Send!</button>
    </Column1>
  );
};

export default TextSubmit;
