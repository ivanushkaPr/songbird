import React, { Component } from 'react';
import styled from 'styled-components';
import image from './bird-mock.jpg';
const BirdImage = styled.img`
  border-radius: 10px;
  max-height: 155px;
`;

export default class Question extends Component {
  render() {
    const source = this.props.source ? this.props.source : image;
    return (


      <BirdImage src={source}/>
    )
  }
}