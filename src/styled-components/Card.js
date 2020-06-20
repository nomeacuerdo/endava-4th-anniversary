import styled from "styled-components";

import { primary, secondary } from '../constants';

const Card = styled.div`
    align-items: ${props => props.image ? 'center' : 'flex-start' };
    background-color: ${primary};
    box-sizing: border-box;
    color: ${secondary};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 230px;
    justify-content: ${props => props.image ? "center" : "flex-start" };
    margin: 0 10px 10px 0;
    min-height: 230px;
    min-width: 230px;
    padding: 16px;
    width: 230px;

    & img {
        max-height: 100%;
        max-width: 100%;
    }
`

export default Card;