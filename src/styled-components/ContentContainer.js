import styled from 'styled-components';

import { black } from '../constants';

const Column1 = styled.div`
  align-self: stretch;
  color: ${black};
  grid-area: content;
  justify-self: stretch;
  padding: 25px 15px 50px;
  display: flex;
  flex-wrap: wrap;
  
  @media screen and (max-width: 1000px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export default Column1;
