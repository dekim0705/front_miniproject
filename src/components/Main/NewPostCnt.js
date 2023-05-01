import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainAxiosApi from "../../api/MainAxiosApi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  font-size: 1.25em;
  font-weight: lighter;
`;

const CountValue = styled.div`
  font-size: 1.25em;
  font-weight: bolder;
`;

const NewPostCnt = () => {
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    const getTodayPostCount = async () => {
      try {
        const response = await MainAxiosApi.todayPostCount();
        setPostCount(response.data);
      } catch (error) {
        console.error("오늘 올라온 글 갯수 불러오기 오류!😱", error);
      }
    };
    getTodayPostCount();
  }, []);

  return (
    <Container>
      <Content>새 글</Content>
      <CountValue>{postCount}</CountValue>
    </Container>
  );
}

export default NewPostCnt;