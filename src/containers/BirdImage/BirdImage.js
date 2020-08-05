import React, { Component } from 'react';
import styled from 'styled-components';
import Bird from './bird-mock.jpg';

const BirdImage = styled.img`
  border-radius: 10px;
  max-height: 155px;
`;

export default class Question extends Component {
  render() {
    return (
      <BirdImage src={Bird}/>
    )
  }
}