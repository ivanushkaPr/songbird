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

const PlayButton = styled.button`
  background-color: transparent;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #00bc8c;
  background-image: url(${Play});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 18px 18px;
`;

const Progress = styled.div`
  min-width: ${props => props.width};
  height: 4px;
  background: linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) 0%, rgb(115, 115, 115) 0%, rgb(115, 115, 115) 100%);
  position: relative;
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
  render() {
    return (
      <Player>
          <PlayButton active={this.props.active}> </PlayButton>
            <PlayerWrapper>
              <Progress width={this.props.width}>
                <Runner/>
              </Progress>
              <TimeContainer>
                <Time> 00.00 </Time>
                <Time> 00.12 </Time>
              </TimeContainer>

            </PlayerWrapper>
          </Player>
    )
  }
}