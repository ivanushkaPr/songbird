import React, { Component } from 'react';
import styled from 'styled-components';
import BirdImage from '../BirdImage/BirdImage';
import Slider from '../Slider/Slider';

const Container = styled.div`

  background-color: rgb(48, 48, 48);
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;    margin-bottom: 25px;
`;



const Wrapper = styled.div`
  flex-grow: 1;
  text-align: left;
  margin-left: 42px;
  `;

const BirdName = styled.h3`
  color: white;
  font-size: 32px;
  font-weight:500;
  height:38px;
  line-height:38.4px;
  margin: 0px;
  margin-bottom: 8px;
  border-bottom:  1px solid rgb(85, 85, 85);
  padding-bottom: 16px;
  max-width: 796px;
`;

export default class Question extends Component {
  render() {
    console.log(this.props.answer, 'have answer')
   
    if(this.props.answer) {
      var { image, name } = this.props.answer;
    }
    return (
      <Container>
        <BirdImage source={image}/>
        <Wrapper>
          <BirdName> 
            {
            name ? name :  '******'
            }  </BirdName>
          <Slider width={'735px'}/>
        </Wrapper>
      </Container>
    )
  }
}