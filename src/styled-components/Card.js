import styled from "styled-components";

import { black, secondary } from '../constants';

const Card = styled.div`
  align-items: ${props => props.image ? 'center' : 'flex-start' };
  background-color: ${secondary};
  box-sizing: border-box;
  color: ${black};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 300px;
  justify-content: ${props => props.image ? "center" : "flex-start" };
  margin: 0 15px 15px 0;
  padding: 16px;
  transition: all .6s;
  width: 300px;
  
  &.active {
    height: 600px;
    width: 100%;
  }

  & img {
      max-height: 100%;
      max-width: 100%;
  }

  @media screen and (max-width: 639px) {
    &:nth-child(n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 640px) and (max-width: 999px) {
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  @media screen and (min-width: 1000px) {
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`

export default Card;
