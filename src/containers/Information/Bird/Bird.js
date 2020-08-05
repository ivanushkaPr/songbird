import React, { Component } from 'react';
import styled from 'styled-components';
import BirdImage from '../../BirdImage/BirdImage';
import Snegir from './snegir.jpg';
import Slider from '../../Slider/Slider';

const Container = styled.div`
`;

const Wrapper = styled.div`
display: flex;
flex-direction: row;`
;

const Image = styled.img``;

const Group = styled.ul`
  padding-left: 0px;
  margin: 0px;
  margin-left: 33px;
`;

const GroupMember = styled.li`
  list-style-type: none`;

const BirdName = styled.h3`
  color: rgb(255, 255, 255);
  font-family:Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size:22.5px;
  font-weight:500;
  line-height:27px;
  text-align:left;
  margin-top: 4px;
  margin-bottom: 16px;
`;

const BirdTerm = styled.p`
  color:rgb(255, 255, 255);
  font-family:Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size:15px;
  font-weight:400;
  line-height:22.5px;
  text-align:left;
`;

const Description = styled.p`
  box-sizing:border-box;
  color:rgb(255, 255, 255);
  font-family:Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size:15px;
  font-weight:400;
  line-height:22.5px;
  overflow-wrap:break-word;
  text-align:left;
  margin-top: 25px;
  margin-bottom: 0px;
`;

export default class Information extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
        <BirdImage src={Snegir}/>
        <Group>
          <GroupMember>
            <BirdName>
              Ворон
            </BirdName>
          </GroupMember>

          <GroupMember>
            <BirdTerm>
            Corvus corax
            </BirdTerm>
          </GroupMember>

          <GroupMember>
            <Slider width={'204px'}></Slider>
          </GroupMember>

        </Group>
        </Wrapper>
 
        <Description>
        Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах 
        крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В
        Англии бытует поверье, что в день, когда черные вороны улетят от
        Тауэра, монархия рухнет.
        
        </Description>
         
      </Container>
    )
  }
}