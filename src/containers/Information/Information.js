import React, { Component } from 'react';
import Bird from './Bird/Bird';

import styled from 'styled-components';

const Container = styled.div`
  flex-basis: 50%;
  margin-left: 29px;
  border-radius: 5px;
  background-color: rgb(48, 48, 48);
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid #444;
  text-align: left;

  @media(max-width: 661px) {
    margin-top: 25px;
    margin-left: 0px;
    min-height: 100px;
  }
`;

const Instruction = styled.p`
  color: white;
  margin: 3px 0px;
`;

export default class Information extends Component {
  render() {

    let content = (
      <>
      <Instruction> Послушайте плеер </Instruction>
      <Instruction> Выберите птицу из списка </Instruction>
      </>
    )
    if(this.props.data) {
      content = (
          <Bird {...this.props} />
      )
    }
    return (
      <Container>
          {content}
      </Container>
     
    )
  }
}