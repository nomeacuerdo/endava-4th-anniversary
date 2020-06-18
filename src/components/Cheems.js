import React from 'react';

import cheems from '../assets/cheems.png';
import Doggo from '../styled-components/Doggo';

const Cheems = () => {
  return (
    <Doggo timeout={200}>
      <img src={cheems} alt="WUT" />
    </Doggo>
  );
};

export default Cheems;
