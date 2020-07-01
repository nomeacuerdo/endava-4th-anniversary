import styled from 'styled-components';

import { primary, secondary, black } from '../constants';

const Column2 = styled.div`
  align-self: start;
  background-color: ${secondary};
  border: 1px solid transparent;
  display: flex;
  grid-area: column2;
  height: 210px;
  justify-self: stretch;
  margin-bottom: 25px;
  padding: 15px;
  text-align: center;

  .upload-form,
  .thanks {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  
  h2 {
    align-self: flex-start;
    color: ${black};
    flex-grow: 1;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    width: 100%;
  }

  input[type=file] {
    align-self: flex-end;
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

  
`;

export default Column2;
