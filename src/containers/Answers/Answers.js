import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
max-width: 540px;
`;

const Answers = styled.ul`
min-width: 540px;
padding-left: 0px;
margin: 0px;
`;

const Answer = styled.li`
list-style-type: none;
display: flex;
flex-direction: row;
align-items: baseline;
padding: 13px;
padding-left: 20px;
padding-top: 17px;
background-color: #303030;
border: 1px solid #555;
border-radius: ${props => props.border ? props.border : null};
`;

const Indicator = styled.div`
width: 10px;
height: 10px;
background-color: ${props => props.error ? '#d62c1a' : props.success ? '#00bc8c' : '#444'};
border-radius: 5px;
margin-right: 15px;
}`;

const Name = styled.p`
  margin: 0px;
  line-height: auto;
  color: white;
`;

export default class Variants extends Component {
  render () {
    return (
      <Container>
        <Answers>
        {
          ['Птица ', 'Птица ', 'Птица ', 'Птица ', 'Птица ', 'Птица '].map((element, index, array) => {
            let border = '';
            if(index === 0) {
              border =  '5px 5px 0px 0px';
            }
            if(index === array.length - 1) {
              border = '0px 0px 5px 5px';
            }

            console.log(border);

            return (
              <Answer  border={border} key={index}>
                <Indicator/>
                <Name> { element } </Name>
              </Answer>
            );
          })
        }
        </Answers>
      </Container>
    );
  }
}
