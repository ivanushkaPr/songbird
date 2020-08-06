import React, {Component} from 'react';
import './App.css';
import Header from './containers/Header/Header';
import Question from './containers/Question/Question';
import Answers from './containers/Answers/Answers';
import Information from './containers//Information/Information';
import styled from 'styled-components';
import NextButton from './components/NextButton/Nextbutton';
import birdsData from './birdsData';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      stage: 1,
      attempt: 1,
      attempts: 0,
      tries: [false, false, false, false, false, false],
      guess: null,
      points: null,
      question: this.getRandomInt(0, 5),
      choosen: null,
      
      data: [...birdsData],
    }
  }

  getRandomInt = (min, max) => {
      // случайное число от min до (max+1)
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
  

  onTicketClickHandler = (e) => {
    const idToNumber = Number(e.currentTarget.id);
    const idToIndex = idToNumber - 1;
    console.log(e.currentTarget.id, this.state.question);
    if(idToIndex === this.state.question) {
      this.onGuess(idToIndex);
    } else if(!this.state.guess) {
      const newTries = [...this.state.tries];
      newTries[idToIndex] = true;
      this.setState({
        ...this.state,
        tries: newTries,
        choosen: idToIndex
      })
    } else {
      this.setState({
        ...this.state,
        choosen: idToIndex
      })
    }
  }

  onGuess = (id) => {
    const newState = {
      ...this.state,
    }

    this.setState(() => {
      return {
        ...this.state,
        guess: id,
        choosen: id
      }
    })
  }

  onNextButtonClickHanlder = e => {
    console.log(this.state.guess);
    if(this.state.guess !== null) {
      console.log('next button is clicked');
      const nextRound = this.state.stage + 1;
      this.setState({
        ...this.state,
        stage: nextRound,
        tries: [false, false, false, false, false, false],
        guess: null,
        question: this.getRandomInt(0, 5),
        choosen: null,
      })
    }
  }

  render() {

    const {stage, choosen, data,  guess, tries } = this.state;
    const correctAnswer = data[stage - 1][guess];
    return (
      <div className="App">
        <Header stage={stage - 1}/>
        <Question answer={correctAnswer}/>
        <Container>
          <Answers success={guess} tries={tries} click={this.onTicketClickHandler} tickets={data[stage - 1]}/>
          <Information data={data[stage - 1][choosen]}/>
        </Container>
        <NextButton click={this.onNextButtonClickHanlder} success={guess}/>
      </div>
    );
  }
}

export default App;
