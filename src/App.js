import React from 'react';
import './App.css';
import Header from './containers/Header/Header';
import Question from './containers/Question/Question';
import Answers from './containers/Answers/Answers';
import Information from './containers//Information/Information';
import styled from 'styled-components';
import NextButton from './components/NextButton/Nextbutton';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Question/>
      <Container>
        <Answers></Answers>
        <Information/>
      </Container>
      <NextButton>
        
      </NextButton>
    </div>
  );
}

export default App;
