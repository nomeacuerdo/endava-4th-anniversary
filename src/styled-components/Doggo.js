import styled from 'styled-components';
import Konami from 'react-konami-code';

const Doggo = styled(Konami)`
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
`;

export default Doggo;
