import styled from 'styled-components';

import { primary, secondary } from '../constants';

const Column1 = styled.div`
  align-self: center;
  background-color: ${primary};
  grid-area: column1;
  justify-self: stretch;
  padding: 15px;
  
  & ::-webkit-input-placeholder,
  & ::-moz-placeholder,
  & :-ms-input-placeholder,
  & :-moz-placeholder,
  & ::placeholder {
    color: ${secondary};
  }

  h2 {
    color: ${secondary};
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  textarea {
    background: transparent;
    border: 0;
    border-bottom: 1px solid ${secondary};
    color: ${secondary};
    margin-bottom: 25px;
    outline: none;
    transition: all .6s;
    width: 100%;

    &:focus {
      border-bottom: 3px solid ${secondary};
    }
  }

  button {
    background: ${secondary};
    border: 1px solid ${secondary};
    color: ${primary};
    cursor: pointer;
    font-family: 'Roboto Condensed', sans-serif;
      font-size: 18px;
    outline: none;
    padding: 15px;
    text-transform: uppercase;
    transition: all .6s;
    width: 100%;

    &:hover {
      background: ${primary};
      color: ${secondary};

    }
  }
`;

export default Column1;
