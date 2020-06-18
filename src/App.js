import React from 'react';

import Cheems from './components/Cheems';
import TextUpload from './components/TextUpload';
import ImageUpload from './components/ImageUpload';
import Content from './components/Content';
import Container from './styled-components/Container';
import Header from './styled-components/header';

import logo from './assets/EndavaLogo.png';

const App = () => (
  <Container>
    <Cheems />
    <Header>
      <img src={logo} className="App-logo" alt="Endava" />
    </Header>
    <TextUpload />
    <ImageUpload />
    <Content />
  </Container>
);

export default App;