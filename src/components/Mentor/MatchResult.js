import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const MatchSuccessText = styled.h1`
  position: absolute;
  width: fit-content;
  height: fit-content;
  left: 10%;
  right: 0;
  top: 10%;
  bottom: 0;
  margin: auto;
  font-weight: 900;
  color: white;
  letter-spacing: 0.5em;
  font-size: 6vw;
  animation: text 1s infinite;
  mix-blend-mode: screen;
  @media screen and (max-width: 768px) {
    font-size: 10vw;
  }
`;

const Svg = styled.svg`
  width: 28%;
  animation: ${rotate} infinite linear;
  mix-blend-mode: multiply;
  margin: 0 -8%;

  fill: ${props => props.fillColor};
  animation-duration: ${props => props.duration}s;
  animation-direction: ${props => props.reverse ? 'reverse' : ''};
  @media screen and (max-width: 768px) {
    width: 35%;
    margin: 0 -10%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ProfileImg = styled.div`
  width: 300px;
  height: 300px;
  border: 8px solid #C6DEF7;
  border-radius: 50%;
  background: url("/src/resource/profile.PNG");
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    border: 2px solid #C6DEF7;
  }
`;

const Nickname = styled.div`
  font-size: 2em;
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const ButtonContainer = styled.div`
  margin: 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;
  @media screen and (max-width: 768px) {
    gap: 20px;
    margin: 20px 0;
  }
`;

const Button = styled.a`
  display: block;
  position: relative;
  float: left;
  width: 230px;
  height: 100px;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #FFF;
  border-radius: 10px;
  transition: all 0.2s;
  background: ${props => props.lightBlue ? '#3B74EC' : ''};
  box-shadow: ${props => props.push && props.lightBlue ? '0px 8px 0px 0px #002E96' : ''};
  font-size: 2em;

  &:hover {
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: ${props => props.push && props.lightBlue ? '0px 0px 0px 0px #002E96' : ''};
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 60px;
    font-size: 1.5em;
    line-height: 60px;
  }
`;

const MatchResult = () => {
  const navigate = useNavigate();
  const ReturnButtonClick = () => {
    navigate('/mentor');
  };
  return (
    <Container>
      <MessageContainer>
        <Svg fillColor="#3B74EC" duration={4} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
          <path d="M21.1,-21.7C27.9,-14.3,34.5,-7.1,36.1,1.7C37.8,10.4,34.5,20.9,27.7,27.6C20.9,34.3,10.4,37.4,1.6,35.7C-7.2,34.1,-14.4,27.9,-19.6,21.1C-24.8,14.4,-27.9,7.2,-28.4,-0.5C-28.8,-8.1,-26.6,-16.2,-21.4,-23.6C-16.2,-31.1,-8.1,-37.8,-0.5,-37.3C7.1,-36.8,14.3,-29.1,21.1,-21.7Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)" />
        </Svg>
        <Svg fillColor="#00ACFF" duration={2} reverse viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M30,-28.9C37.3,-22.7,40.6,-11.4,38.4,-2.1C36.3,7.2,28.9,14.3,21.6,21.2C14.3,28.1,7.2,34.7,-0.2,34.9C-7.5,35,-15,28.7,-20.2,21.9C-25.4,15,-28.3,7.5,-30.1,-1.8C-31.9,-11.2,-32.7,-22.3,-27.5,-28.4C-22.3,-34.6,-11.2,-35.6,0.1,-35.8C11.4,-35.9,22.7,-35,30,-28.9Z" width="100%" height="100%" transform="translate(50 50)"/>
        </Svg>
        <Svg fillColor="#00D8EE" duration={6} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M24,-23C29.9,-18,32.8,-9,32.1,-0.7C31.4,7.6,27,15.2,21.1,20.5C15.2,25.9,7.6,29.1,-0.4,29.5C-8.4,29.9,-16.7,27.5,-23,22.1C-29.3,16.7,-33.5,8.4,-33.2,0.3C-33,-7.9,-28.3,-15.7,-22,-20.6C-15.7,-25.6,-7.9,-27.5,0.6,-28.1C9,-28.7,18,-27.9,24,-23Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" />
        </Svg>
        <Svg fillColor="#6DFACD" duration={3} reverse viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d='M20.6,-19.3C26.9,-14.4,32.3,-7.2,32.9,0.6C33.5,8.4,29.3,16.8,23,24.1C16.8,31.5,8.4,37.9,0.4,37.5C-7.7,37.1,-15.3,30,-22.4,22.7C-29.4,15.3,-35.9,7.7,-36.4,-0.5C-37,-8.7,-31.5,-17.4,-24.5,-22.4C-17.4,-27.3,-8.7,-28.5,-0.8,-27.7C7.2,-27,14.4,-24.3,20.6,-19.3Z' width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)" /></Svg>
        <MatchSuccessText>매칭성공</MatchSuccessText>
      </MessageContainer>
      <MemberContainer>
        <MemberInfo>
          <ProfileImg />
          <Nickname>양갱좋아</Nickname>
        </MemberInfo>
        <MemberInfo>
          <ProfileImg />
          <Nickname>리액트흑흑</Nickname>
        </MemberInfo>
      </MemberContainer>
      <ButtonContainer>
        <Button push lightBlue>대화하기</Button>
        <Button push lightBlue onClick={ReturnButtonClick}>돌아가기</Button>
      </ButtonContainer>
    </Container>
  );
};

export default MatchResult;
