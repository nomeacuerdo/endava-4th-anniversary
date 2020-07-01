import React from 'react';

import Cheems from './components/Cheems';
import TextUpload from './components/TextUpload';
import ImageUpload from './components/ImageUpload';
import Content from './components/Content';
import Container from './styled-components/Container';
import Header from './styled-components/header';

import logo from './assets/EndavaLogo.png';
import four from './assets/4years-Logo.png';
import AppContainer from './styled-components/AppContainer';

const App = () => (
  <AppContainer>
  <Container>
    <Cheems />
    <Header>
      <img src={logo} className="App-logo" alt="Endava" />
      <img src={four} className="Anniversary-logo" alt="4 Years together" />
    </Header>
    <TextUpload />
    <ImageUpload />
    <Content />
  </Container>
  </AppContainer>
);

export default App;
