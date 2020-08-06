import React, { Component } from 'react';
import Bird from './Bird/Bird';

import styled from 'styled-components';

const Container = styled.div`
  margin-left: 29px;
  min-width: 540px;
  border-radius: 5px;
  background-color: rgb(48, 48, 48);
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid #444;
  text-align: left;
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
          <Bird data={this.props.data}/>
      )
    }
    return (
      <Container>
          {content}
      </Container>
     
    )
  }
}