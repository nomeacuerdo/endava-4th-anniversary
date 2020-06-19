import styled from 'styled-components';

const Container = styled.div`
  font: 300 18px 'Roboto', Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: auto 250px 100px 250px auto;
  grid-template-areas: ". header header header ."
                       ". column1 . column2 .";
`;


export default Container;
