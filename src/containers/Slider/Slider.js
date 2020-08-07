import React, { Component } from 'react';
import styled from 'styled-components';
import Play from './play.svg';
import Pause from './pause.svg';

const Player = styled.div`
  padding-top: 6px;
  padding-left: 2px;
  display: flex;
  flex-direction: row;
  max-width: ${props => props.width };
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 18px;
  margin-left: 14px;
`;

const Audio = styled.audio`
display: none;
`;

const PlayButton = styled.button`
  background-color: transparent;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #00bc8c;
  background-image: url(${props => props.playing ? Pause : Play});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 18px 18px;
`;

const Bar = styled.div`
  min-width: ${props => props.width};
  height: 4px;
  position: relative;
  background-color: rgb(115, 115, 115);
  `;

const Progress = styled.div`
  min-width: ${props => props.width};
  height: 4px;
`;

const Runner = styled.div`
  position: absolute;
  background-color: grey;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  left: 0px;
  top: -6px;
`;



const TimeContainer =  styled.div`
  display: flex;
  margin-left: 7px;
  justify-content: space-between;

`;

const Start = styled.div``;

const End = styled.div``;

const Time = styled.p`
  margin-top: 8px;
  box-sizing: border-box;
  color:rgb(211, 211, 211);
  font-size:11px;
  font-weight:400;
  line-height:16.5px;
`;

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.runnerRef = React.createRef();

  }

  onLoadAudioHandler = e => {
    const duration = Math.floor(e.target.duration);
    const Target = e.target.nextElementSibling.nextElementSibling.lastChild.lastChild;
    const minutes = parseInt(duration / 60);
    const seconds = String(duration - minutes * 60);

    const output = seconds.length === 1 ? `0` + minutes + ':0' + seconds : `0` + minutes + ':' + seconds
    Target.innerHTML = output;
  }

  render() {
    return (
      <Player>
        <Audio onLoadedMetadata={this.onLoadAudioHandler} onTimeUpdate={this.props.update} ref={this.props.audioReference} controls src={this.props.audio}>

        </Audio>
        <PlayButton 
        onClick={(e) => {
          const ref = this.props.audioReference, 
          playing=this.props.id; 
          this.props.click(e, ref, playing)}}
          playing={this.props.playing}
        />

        <PlayerWrapper>
          <Bar width={this.props.width}>
            <Progress ref={this.props.progressReference} />
            <Runner onMouseDown={this.props.drag} ref={this.runnerRef}/>
          </Bar>
          
          <TimeContainer>
            <Time> 00.00 </Time>
            <Time> 00.00 </Time>
          </TimeContainer>

        </PlayerWrapper>
      </Player>
    )
  }
}