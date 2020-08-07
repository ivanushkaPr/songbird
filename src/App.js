import React, {Component} from 'react';
import './App.css';
import Header from './containers/Header/Header';
import Question from './containers/Question/Question';
import Answers from './containers/Answers/Answers';
import Information from './containers//Information/Information';
import styled from 'styled-components';
import NextButton from './components/NextButton/Nextbutton';
import birdsData from './birdsData';
import Confragulations from './components/Confragulations/Confragulations';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.progressRef = React.createRef();
    this.state = {
      stage: 1,
      attempt: 1,
      attempts: 0,
      tries: [false, false, false, false, false, false],
      guess: null,
      points: 5,
      score: 0,
      question: this.getRandomInt(0, 5),
      choosen: null,
      playing: false,
      data: [...birdsData],
    }
  }


  onPlayButtonHandler = (e) => {
    const { playing } = this.state;
    const newState = {
      playing: !playing
    };

    if(!playing) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }

    this.setState(newState);
  }

  onStopButtonHandler = (e) => {
    this.audioRef.current.pause();
    this.audioRef.current.currentTime = 0.0;
  }

  onFormatTimeOutput = (time) => {    
    const minutes = parseInt(Math.floor(time) / 60);
    const seconds = String(Math.floor(time) - minutes * 60);

    return seconds.length === 1 ? `0` + minutes + ':0' + seconds : `0` + minutes + ':' + seconds;
  }

  getTime = (audio) => {
    return audio.currentTime / (audio.duration / 100);
  }



  calcProgressWidth = () => {
    const progressWidth =  this.runner.getBoundingClientRect().left
      - this.progressRef.current.getBoundingClientRect().left;

    return progressWidth / (parseInt(getComputedStyle(this.progressRef.current).width) / 100);
  }

  widthToTime = (audio, width) => {
    const duration = audio.duration;
    const audioPercent = duration / 100;

    const time = width * audioPercent;
    audio.currentTime = time;
  }

  timeToWidth = () => {

  }

  calcProgWidth = (time) => {
    return parseInt(getComputedStyle(this.progressRef.current).width) / 100 * time;
  }

  

  onAudioTimeUpdate = (e) => { 
    const { getTime, calcProgWidth, onFormatTimeOutput } = this;

    if(!this.dragging) {
      this.onProgreessResize(getTime(e.target), this.progressRef.current);
      this.changeRunnerPosition( calcProgWidth(getTime(e.target)))
    }
    
    const currentTimeElement = e.target.nextElementSibling.nextElementSibling.lastChild.firstChild;
    currentTimeElement.innerHTML = onFormatTimeOutput(e.target.currentTime);
  }

  onProgreessResize = (percents, bar) => {
    bar.style.backgroundImage = 'linear-gradient' +
    `(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${percents}%, rgb(115, 115, 115) ${percents}%, rgb(115, 115, 115) 100%)`;
  }

  changeRunnerPosition = (width) => {
    this.progressRef.current.nextElementSibling.style.left = width + 'px';
  }


  getRandomInt = (min, max) => {
      // случайное число от min до (max+1)
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
  

  onTicketClickHandler = (e) => {
    const idToNumber = Number(e.currentTarget.id);
    const idToIndex = idToNumber - 1;
    if(idToIndex === this.state.question) {
      this.onGuess(idToIndex);
    } else if(!this.state.guess && this.state.tries[idToIndex] === false) {
      const newTries = [...this.state.tries];
      newTries[idToIndex] = true;

      const { points } = this.state;
      const newPoints = points - 1;

      this.setState({
        ...this.state,
        tries: newTries,
        choosen: idToIndex,
        points: newPoints
      })

    } else {
      this.setState({
        ...this.state,
        choosen: idToIndex
      })
    }
  }

  onGuess = (id) => {
    const { score, points , guess} = this.state;
    if(guess === null) {
      //const score = oldScore + newScore + points;

      const newScore = score + points;

      const newState = {
        ...this.state,
        guess: id,
        choosen: id,
        score: newScore,
      }

      this.setState(() => {
        return newState
      })
    } else {
      this.setState((state) => {
        return {
          ...this.state,
          choosen: id
      }
      })
    }
    
  }

  onNextButtonClickHanlder = e => {
    if(this.state.guess !== null) {
      const nextRound = this.state.stage + 1;
      this.setState({
        ...this.state,
        stage: nextRound,
        tries: [false, false, false, false, false, false],
        guess: null,
        question: this.getRandomInt(0, 5),
        choosen: null,
        points: 5,
        playing: false
      })
    }
  }

  onRestartButtonHandler = e => {
    this.setState(
    {
        stage: 1,
        attempt: 1,
        attempts: 0,
        tries: [false, false, false, false, false, false],
        guess: null,
        points: 5,
        score: 0,
        question: this.getRandomInt(0, 5),
        choosen: null,
        playing: false,
        data: [...birdsData],
      }
    )
  }


  onDragStart = e => {
    this.dragging = true;
    e.target.position = 'absolute';
    e.target.zIndex = 1000;
    this.runner = e.target;
    
    const moveAt = (pageX, pageY, element) => {
      element.style.left = pageX - element.parentNode.offsetLeft + 'px';
      element.style.top = pageY - element.parentNode.offsetTop + 'px';
      this.onProgreessResize( this.calcProgressWidth(), this.progressRef.current);
    }
    moveAt(e.pageX, e.pageY, this.runner);

    const mouseMove = (e) => {
      moveAt(e.clientX, e.clientY, this.runner);
    }

    document.addEventListener('mousemove', mouseMove);

    const mouseUp = () => {
      this.widthToTime(this.audioRef.current, this.calcProgressWidth());
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
      this.dragging = false;
    }

    document.addEventListener('mouseup', mouseUp);
    console.log(this.audioRef.current, 'our audio player')

  }




  mouseUp = e => {

  }

  render() {
    

    const { stage, score, guess, } = this.state;
    let content;
    if(this.state.stage < 7) {
      const { choosen, data, tries, question, playing } = this.state;
      const audioSource = data[stage - 1][question].audio;
      const correctAnswer = data[stage - 1][guess];

      content = (
        <>
          <Question 
            update={this.onAudioTimeUpdate}
            click={this.onPlayButtonHandler}
            drag={this.onDragStart}
            audioReference={this.audioRef}
            progressReference={this.progressRef}
            audio={audioSource} 
            answer={correctAnswer} 
            playing={playing}/>
          <Container>
            <Answers success={guess} tries={tries} click={this.onTicketClickHandler} tickets={data[stage - 1]}/>
            <Information data={data[stage - 1][choosen]}/>
          </Container>
          <NextButton click={this.onNextButtonClickHanlder} success={guess}/>
        </>
    ); 
    }
  

    if(stage === 7) {
      
      content = <Confragulations click={this.onRestartButtonHandler}/>
    }

    if(stage === 7 && score === 30) {
      content = <p> Вы прошли </p> 
    } 

    return (
    <div className="App">
      <Header stage={stage} success={guess} score={score}/>
      {content}
      </div>
    )
  }
}

export default App;
