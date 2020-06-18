import styled from 'styled-components';

import { secondary, black } from '../constants';

const Column1 = styled.div`
  align-self: stretch;
  background-color: ${secondary};
  color: ${black};
  grid-area: content;
  justify-self: stretch;
  padding: 50px 15px;
`;

export default Column1;
