import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainAxiosApi from "../../api/MainAxiosApi";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

const TotalMemberCount = styled.div`
  font-size: 4em;
  color: #3B74EC;
  @media screen and (max-width:768px) {
    font-size: 2em;
  }
`

const TopContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 5px;
`;

const Content = styled.div`
  font-size: 2em;
  @media screen and (max-width:768px) {
    font-size: 1.3em;
  }
`;

const WelcomeMessage = () => {
  const [totalMemberCount, setTotalMemberCount] = useState(0);

  useEffect(() => {
    const getTotalMemberCount = async () => {
      try {
        const response = await MainAxiosApi.totalMemberCount();
        setTotalMemberCount(response.data);
      } catch (error) {
        console.error("회원 수 불러오기 에러!😱", error)
      }
    };
    getTotalMemberCount();
  }, []);
  return (
    <Container>
      <TopContent>
        <Content>이미</Content>
        <TotalMemberCount>{totalMemberCount}</TotalMemberCount>
        <Content>명의 개발자가 함께하고 있습니다.</Content>
      </TopContent>
      <Content>지금 바로 검색해보세요!</Content>
    </Container>
  );
}

export default WelcomeMessage;