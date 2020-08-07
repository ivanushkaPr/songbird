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
import wrong from './sounds/wrong.mp3';
import right from './sounds/right.mp3';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrong = styled.audio`
  display: none`;

const Right = styled.audio`
  display: none`;

class App extends Component {
  constructor(props) {
    super(props);
    this.rightRef= React.createRef();
    this.wrongRef= React.createRef();
    this.audioRef = React.createRef();
    this.progressRef = React.createRef();
    this.audioRef2 = React.createRef();
    this.progressRef2 = React.createRef();
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
      playing2: false,
      data: [...birdsData],
    }
  }


  onPlayButtonHandler = (e, ref, prop) => {
    const playing = this.state[prop];
    const newState = {
      [prop]: !playing
    };
    console.log(newState);

    if(!playing) {
      ref.current.play();
    } else {
      ref.current.pause();
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



  calcProgressWidth = (progressRef) => {
    const progressWidth =  this.runner.getBoundingClientRect().left
      - progressRef.current.getBoundingClientRect().left;

    return progressWidth / (parseInt(getComputedStyle(progressRef.current).width) / 100);
  }

  widthToTime = (audio, width) => {
    const duration = audio.duration;
    const audioPercent = duration / 100;

    const time = width * audioPercent;
    audio.currentTime = time;
  }

  timeToWidth = () => {

  }

  calcProgWidth = (time, progressRef) => {
    return parseInt(getComputedStyle(progressRef.current).width) / 100 * time;
  }

  onAudioTimeUpdate = (e, progressRef) => { 
    const { getTime, calcProgWidth, onFormatTimeOutput } = this;

    if(!this.dragging) {
      this.onProgreessResize(getTime(e.target), progressRef.current);
      this.changeRunnerPosition( calcProgWidth(getTime(e.target), progressRef), progressRef)
    }
    
    const currentTimeElement = e.target.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.firstChild;
    
    currentTimeElement.innerHTML = onFormatTimeOutput(e.target.currentTime);
  }

  onProgreessResize = (percents, bar) => {
    bar.style.backgroundImage = 'linear-gradient' +
    `(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${percents}%, rgb(115, 115, 115) ${percents}%, rgb(115, 115, 115) 100%)`;
  }

  changeRunnerPosition = (width, progressRef) => {
    progressRef.current.nextElementSibling.style.left = width + 'px';
  }

  onVolumeChange = (audio) => {
    
  }

  calcVolumeLevel = (audio) => {
    const parent = this.volumeEl.getBoundingClientRect();
    const child = this.volumeEl.firstChild.getBoundingClientRect();

    const parentWidth = parent.width;
    const childWidth = child.width;

    const volumeLevel = childWidth / parentWidth;
    audio.current.volume = volumeLevel;
    console.log(audio.current.volume)
  }

  onAudioChangeHandler = (e, audioRef) => {
    this.volumeEl = e.currentTarget;

    const moveAt = (pageX) => {
      const child = this.volumeEl.firstElementChild;
      const volumeElCoords = this.volumeEl.getBoundingClientRect()
      let level = pageX - volumeElCoords.left;
      const maxWidth = volumeElCoords.right - volumeElCoords.x


      level =  pageX < volumeElCoords.left ?  0 : pageX > volumeElCoords.right ? volumeElCoords.width : level;
      console.log(level, 'level is');
      child.style.width = level < maxWidth  ? level + 'px' : volumeElCoords.width;

      this.calcVolumeLevel(audioRef);
    }

    const mouseMove = (e) => {
      moveAt(e.pageX)
    }

    const mouseUp = () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
      this.volumeEl = null;
    }



    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
    moveAt(e.pageX);

    
  }

  getRandomInt = (min, max) => {
      // случайное число от min до (max+1)
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
  }

  onTicketClickHandler = (e) => {
    const idToNumber = Number(e.currentTarget.id);
    const idToIndex = idToNumber - 1;
    if(idToIndex === this.state.question && !this.state.guess) {
      this.rightRef.current.play();
      this.onGuess(idToIndex);
    } else if(!this.state.guess && this.state.tries[idToIndex] === false) {
      console.log(this.state.guess, 'youre guess');
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
      this.wrongRef.current.currentTime = 0.0;
      this.wrongRef.current.play();

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


  onDragStart = (e, progressRef, audioRef) => {
    this.dragging = true;
    e.target.position = 'absolute';
    e.target.zIndex = 1000;
    this.runner = e.target;
    
    const moveAt = (pageX, pageY, element) => {
      element.style.left = pageX - element.parentNode.offsetLeft + 'px';
      this.onProgreessResize( this.calcProgressWidth(progressRef), progressRef.current);
    }
    moveAt(e.pageX, e.pageY, this.runner);

    const mouseMove = (e) => {
      moveAt(e.clientX, e.clientY, this.runner);
    }

    document.addEventListener('mousemove', mouseMove);

    const mouseUp = () => {
      this.widthToTime(audioRef.current, this.calcProgressWidth(progressRef));
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
      this.dragging = false;
    }

    document.addEventListener('mouseup', mouseUp);
  }

  render() {
    

    const { stage, score, guess, } = this.state;
    let content;
    if(this.state.stage < 7) {
      const { choosen, data, tries, question, playing, playing2 } = this.state;
      const audioSource = data[stage - 1][question].audio;
      const correctAnswer = data[stage - 1][guess];

      content = (
        <>
          <Right ref={this.rightRef} src={right}/>
          <Wrong ref={this.wrongRef} src={wrong}/>
          <Question 
            update={this.onAudioTimeUpdate}
            click={this.onPlayButtonHandler}
            drag={this.onDragStart}
            audioReference={this.audioRef}
            progressReference={this.progressRef}
            audio={audioSource} 
            answer={correctAnswer} 
            playing={playing}
            id={'playing'}
            volume={this.onAudioChangeHandler}
            />
            
          <Container>
            <Answers success={guess} tries={tries} click={this.onTicketClickHandler} tickets={data[stage - 1]}/>
            <Information
            update={this.onAudioTimeUpdate}
            click={this.onPlayButtonHandler}
            drag={this.onDragStart}
            audioReference={this.audioRef2}
            progressReference={this.progressRef2}
            playing={playing2}
            id={'playing2'}
            volume={this.onAudioChangeHandler}
            data={data[stage - 1][choosen]}/>
          </Container>
          <NextButton click={this.onNextButtonClickHanlder} success={guess}/>
        </>
    ); 
    }
  

    if(stage === 7) {
      
      content = <Confragulations click={this.onRestartButtonHandler} score={score}/>
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
