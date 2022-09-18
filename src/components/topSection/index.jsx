import React from 'react';
import styled from 'styled-components';

const TopSection = (props) => {
  return (
    <TopSectionContainer>
        <Logo>{props.logo}</Logo>
            <Slogan>
                {props.slogan}
            </Slogan>
            <Paragraph>
                Till then try rotating and zooming into the Earth and stars maybe?🤔
            </Paragraph>
    </TopSectionContainer>
  )
}

const TopSectionContainer=styled.div`
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  background-color:#1756dd81;
  display:flex;
  flex-direction:column;
  padding-top:1%;
  z-index:1;
  `;

  const Logo=styled.h1`
    margin:0;
    color:#ffffff;
    font-weight:700;
    font-size:60px;
  `;

  const Paragraph=styled.p`
    margin:0;
    color:#ffffff;
    margin-top:1em;
    font-size:16px;
    line-height:1.5;
    font-weight:700;
    max-width:40%;
    text-align:center;
    align-self:center;

  `;

  const Slogan=styled.h4`
    margin:0;
    color:black;
    font-weight:700;
    font-size:15px;
    margin-top:1em;
    align-self:center;
    background-color:#ffffff1a;
    `;


export default TopSection;