import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%`;

const Next = styled.button`
  width: 100%;
  margin-top: 25px;
  display: block;
  background-color: ${props => typeof props.success === 'number' ? '#00bc8c' : '#303030'};
  border: none;
  padding: 10px 12px;
  font-size: 15px;
  color: white;
  border-radius: 5px;

  `;

export default class NextButton extends Component {
  render() {
    return (
      <Container>
        <Next onClick={this.props.click} success={this.props.success}>
          Next Level
        </Next>
      </Container>
    )
  }
}