import styled from 'styled-components';

import { primary, secondary } from '../constants';

const Textarea = styled.textarea`
  background: ${primary};
  border: 0;
  border-bottom: 1px solid ${secondary};
  color: ${secondary};
  font: 300 18px 'Roboto', Arial, Helvetica, sans-serif;
  outline: none;
  transition: all .6s;
  width: 100%;

  &:focus {
    border-bottom: 3px solid ${secondary};
  }

  
  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  :-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
    
`;

export default Textarea;
