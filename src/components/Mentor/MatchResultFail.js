import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import failImg from "../../resource/fail-image.png"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const Text = styled.h1`
  font-size: 4em;
  font-weight: bolder;
  color: #1E2B4D;
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

const MatchResultFail = () => {
  const navigate = useNavigate();
  const ReturnButtonClick = () => {
    navigate('/mentor');
  };

  return (
    <Container>
      <Text>매칭 실패 💬</Text>
      <img src={failImg} alt="fail" />
      <Button push lightBlue onClick={ReturnButtonClick}>돌아가기</Button>
    </Container>
  );
}

export default MatchResultFail;