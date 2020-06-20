import styled from "styled-components";

import { primary, secondary } from '../constants';

const Button = styled.button`
  background: ${props => props.primary ? primary : secondary};
  border: 1px solid ${props => props.primary ? secondary : primary};
  color: ${props => props.primary ? secondary : primary};
  cursor: pointer;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  margin-top: 25px;
  outline: none;
  padding: 15px;
  text-transform: uppercase;
  transition: all .6s;
  width: 100%;

  &:hover {
    background: ${props => props.primary ? secondary : primary};
    color: ${props => props.primary ? primary : secondary};
    border: 1px solid ${props => props.primary ? primary : secondary};
  }
`

export default Button;
