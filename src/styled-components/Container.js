import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  font: 300 18px 'Roboto', Arial, Helvetica, sans-serif;
  grid-template-columns: auto 250px 100px 250px auto;
  grid-template-rows: [head-start] 10% [head-end upload-start] 300px [upload-end content-start] auto [content-end];
  grid-template-areas: ". header header header ."
                       ". column1 . column2 ."
                       ". content content content .";
`;


export default Container;
