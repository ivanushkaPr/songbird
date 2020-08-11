import React, { Component } from 'react';
import styled from 'styled-components';
import BirdImage from '../BirdImage/BirdImage';
import Slider from '../Slider/Slider';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(48, 48, 48);
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;    margin-bottom: 25px;

  @media(max-width: 460px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  text-align: left;
  margin-left: 42px;

  @media(max-width: 460px) {
    flex-direction: column;
    margin-left: 0px;
    justify-content: center;
  }
  `;

const BirdName = styled.h3`
  color: white;
  font-size: 32px;
  font-weight:500;
  line-height:38.4px;
  margin: 0px;
  margin-bottom: 8px;
  border-bottom:  1px solid rgb(85, 85, 85);
  padding-bottom: 16px;
  max-width: 796px;

  @media(max-width: 460px) {
    text-align: center;
  }
`;

export default class Question extends Component {
  render() {
    if(this.props.answer) {
      var { image, name} = this.props.answer;
    }
    const { progressReference, audioReference, click, update, id, volume } = this.props; 
    return (
      <Container>
        <BirdImage source={image}/>
        <Wrapper>
          <BirdName> 
            {
            name ? name :  '******'
            }  </BirdName>
          
          <Slider
            volume={volume}
            id={id}
            update={update}
            click={click}
            drag={this.props.drag}
            progressReference={progressReference}
            audioReference={audioReference}
            playing={this.props.playing}
            audio={this.props.audio}
            />
        </Wrapper>
      </Container>
    )
  }
}