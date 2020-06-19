import styled from "styled-components";

import { primary, secondary } from '../constants';

const Card = styled.div`
    width: 100%;
    height: 100%;
    min-height: 250px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.image ? "center" : "flex-start" };
    justify-content: ${props => props.image ? "center" : "flex-start" };
    background-color: ${primary};
    color: ${secondary};
    padding: 16px;

    & img {
        width: 100%;
    }
`

export default Card;