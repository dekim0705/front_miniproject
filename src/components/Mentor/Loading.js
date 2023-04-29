import React from "react";
import { Rings } from "react-loader-spinner";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
  margin-top: 80px;
`;

const Content = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #4E5968;
  font-weight: lighter;
  line-height: 20px;
  @media screen and (max-width: 768px) {
    padding: 0 10px;
    font-size: 1.3em;
    line-height: 30px;
  }
`;

const Loading = () => {

  return (
    <StyledContainer>
      <Rings 
      height="280"
      width="280"
      color="#3B74EC"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"/>
      <Content>사용자의 개발 스택을 고려하여 최적의 매칭을 찾고 있습니다.</Content>
      <Content>조금만 기다려주세요! 🥹</Content>
    </StyledContainer>
  );
}

export default Loading;