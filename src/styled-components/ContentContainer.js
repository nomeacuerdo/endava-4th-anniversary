import styled from 'styled-components';

import { black } from '../constants';

const Column1 = styled.div`
  align-self: stretch;
  background-color: none;
  color: ${black};
  grid-area: content;
  justify-self: stretch;
  padding: 50px 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 18px
`;

export default Column1;
