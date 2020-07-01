import styled from 'styled-components';

import { primary, secondary } from '../constants';

const Column1 = styled.div`
  align-self: start;
  background-color: ${primary};
  grid-area: column1;
  height: 210px;
  justify-self: stretch;
  margin-bottom: 25px;
  padding: 15px;
  text-align: center;

  h2 {
    color: ${secondary};
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  span {
    color: ${props => props.displayCount ? secondary : 'transparent'};
    display: flex;
    justify-content: flex-end;
  }
`;

export default Column1;
