import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: block;
padding: 4rem 2rem;
margin-bottom: 2rem;
background-color: #303030;
width: 100%;
box-sizing: border-box;
`;


const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
  color: white;
`;

const Score = styled.p`
font-size: 1.171875rem;
font-weight: 300;
color: white;

`;


const Restart = styled.button`
background-color: #00bc8c;
width: 100%;
border: none;
padding: 15px;
color: white;
border: 1px solid #444;
border-radius: 4px;

`;



const confragulations = props => {
  return (
    <Container>
      <Title> Поздравляем </Title>
      <Score> Вы прошли викторину и набрали  {props.score} из 30 возможных баллов </Score>
      <Restart onClick={props.click}> Попробовать еще раз </Restart>
    </Container>
  )
}

export default confragulations