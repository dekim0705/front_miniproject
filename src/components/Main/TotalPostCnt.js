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

const TotalPostCnt = () => {
  const [totalPostCount, setTotalPostCount] = useState(0);

  useEffect(() => {
    const getTotalPostCount = async () => {
      try {
        const response = await MainAxiosApi.totalPostCount();
        setTotalPostCount(response.data);
      } catch (error) {
        console.error("전체 글 갯수 불러오기 오류!😱", error);
      }
    };
    getTotalPostCount();
  }, []);

  return (
    <Container>
      <Content>누적 게시글</Content>
      <CountValue>{totalPostCount}</CountValue>
    </Container>
  );
}

export default TotalPostCnt;