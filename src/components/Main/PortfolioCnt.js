import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainAxiosApi from "../../api/MainAxiosApi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 140px;
  text-align: center;
  font-size: 1.5em;
  margin: 20px 0;
`;

const Content = styled.div`
  font-weight: lighter;
`;

const CountValue = styled.div`
  font-weight: bolder;
`;

const PortfolioCnt = () => {
  const [portfolioCount, setportfolioCount] = useState(0);

  useEffect(() => {
    const getPortfolioCount = async () => {
      try {
        const response = await MainAxiosApi.portfolioCount();
        setportfolioCount(response.data);
      } catch (error) {
        console.error("포트폴리오 글 갯수 불러오기 오류!😱", error);
      }
    };
    getPortfolioCount();
  }, []);

  return (
    <Container>
      <Content>포트폴리오</Content>
      <CountValue>{portfolioCount}</CountValue>
    </Container>
  );
}

export default PortfolioCnt;