import styled from 'styled-components';

import { primary, secondary, black } from '../constants';

const Column2 = styled.div`
  align-self: center;
  background-color: ${secondary};
  grid-area: column2;
  justify-self: stretch;
  padding: 15px;
  
  h2 {
    color: ${black};
    font-family: 'Roboto Condensed', sans-serif;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  input[type=file] {
    border: 1px solid transparent;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;

    & + label {
      background-color: ${primary};
      color: ${secondary};
      cursor: pointer;
      display: block;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 18px;
      padding: 15px;
      text-transform: uppercase;
      text-align: center;
      transition: all .6s;
    }

    &:focus + label,
    & + label:hover {
      background-color: ${secondary};
      border: 1px solid ${primary};
      color: ${primary};
    }
  }

  .upload-form {
    display: ${props => props.display === '' ? 'block' : 'none' };
  }

  .thanks {
    display: ${props => props.display === '' ? 'none' : 'block' };
  }
`;

export default Column2;
