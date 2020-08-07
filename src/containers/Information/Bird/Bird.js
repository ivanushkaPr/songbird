import React, { Component } from 'react';
import styled from 'styled-components';
import BirdImage from '../../BirdImage/BirdImage';
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
    const {name, species, description, image, audio} = this.props.data;
    const { click, drag, audioReference, progressReference, playing, id, update } = this.props;
    return (
      <Container>
        <Wrapper>
        <BirdImage source={image}/>
        <Group>
          <GroupMember>
            <BirdName>
              { name }
            </BirdName>
          </GroupMember>

          <GroupMember>
            <BirdTerm>
            {species}
            </BirdTerm>
          </GroupMember>

          <GroupMember>
            <Slider
              update={update}
              id={id}
              click={click}
              drag={drag}
              audio={audio}
              audioReference={audioReference}
              progressReference={progressReference}
              playing={playing}
              width={'204px'}/>
          </GroupMember>

        </Group>
        </Wrapper>
 
        <Description>
        {description}
        
        </Description>
         
      </Container>
    )
  }
}