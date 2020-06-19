import styled from "styled-components";

import { primary, secondary } from '../constants';

const Card = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${primary};
    color: ${secondary};
    padding: 6px;
`

export default Card;