import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './Logo.svg';


const Container = styled.div`

`;

const Panel = styled.div`
  margin-top: 23px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  background-image: url(${props => props.source});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 200px;
  height: 55px;
`;

const Score = styled.h5`
  color:rgb(255, 255, 255);
  display:block;
  font-family:Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 18.75px;
  font-weight:500;
  margin: 0px;
  margin-top: 15px;
`;

const Points = styled.span``;

const Navigation = styled.nav`

`;

const Menu = styled.ul`
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  padding-left: 0px;
  margin-top: 13px;
  margin-bottom: 25px;
`;

const Category = styled.li`
  flex: auto;
  list-style-type: none;
  padding: 8px 12px;
  background-color: ${props => props.active ? ' #00bc8c;' : '#008966'};
  border-color: #007c5d;
  text-align: center;
`;

const Link = styled.a`
  width: 100%;
  text-align: center;
  color: white;
`;

export default class Header extends Component {
  render() {


    return (
      <Container>
        <Panel>
          <Logo source={logo}/>
          <Score> 
            Score:
            <Points> 0</Points>
          </Score>
        </Panel>

         <Navigation>
           <Menu>
             {['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'].map((el, index, array) => {
               const active = this.props.stage === index ? true : false;
               return (
                <Category active={active} key={index+el}>
                  <Link>
                  {el}
                  </Link>
                </Category>
               )
             }) 
             }
  
           </Menu>
         </Navigation>
        
      </Container>
    );
  }
}
