import styled from 'styled-components';

const Container = styled.div`
  font: 300 18px 'Roboto', Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: auto 450px 100px 450px auto;
  grid-template-areas: ". header header header ."
                       ". column1 . column2 ."
                       ". content content content .";

  @media screen and (max-width: 639px) {
    grid-template-columns: auto 450px auto;
    grid-template-areas: ". header ."
                         ". column1 ."
                         ". column2 ."
                         ". content .";
  }

  @media screen and (min-width: 640px) and (max-width: 1000px) {
    grid-template-columns: auto 310px 20px 310px auto;
  grid-template-areas: ". header header header ."
                       ". column1 . column2 ."
                       ". content content content .";
  }
`;


export default Container;
