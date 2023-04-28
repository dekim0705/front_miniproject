import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 100px;
  margin: 120px 0;

  @media screen and (max-width: 768px) {
    gap: 40px;
    margin: 60px 0;
  }
`;

const ItemContent = styled.div`
  text-align: center;
`;

const ItemTitle = styled.h1`
  font-size: 3rem;
  line-height: 80px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 1.2em;
    line-height: 40px;
  }
`;

const Button = styled.a`
  display: block;
  position: relative;
  float: left;
  width: 300px;
  height: 100px;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #FFF;
  border-radius: 10px;
  transition: all 0.2s;
  background: #3B74EC;
  box-shadow: 0px 8px 0px 0px #002081;
  text-decoration: none;
  font-size: 2em;

  &:hover {
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px #3B74EC;
  }
`;

const Start = () => {
  const navigate = useNavigate();
  const StartButtonClick = () => {
    navigate('loading');
  };

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <ItemContent>
          <ItemTitle>성장하는 개발자가 되기 위한 한 걸음 🚀</ItemTitle>
          <ItemTitle>지금 멘토가 당신과의 만남을 기다리고 있습니다.</ItemTitle>
        </ItemContent>
        <Button onClick={StartButtonClick}>매칭하기</Button>
      </StyledContainer>
    </>
  );
};

export default Start;