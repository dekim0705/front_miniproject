import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainAxiosApi from "../../api/MainAxiosApi";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 2px solid #C6DEF7;
  border-radius: 10px;
  padding: 5px 10px;
`;

const Rank = styled.div`
`;

const Nickname = styled.div`
  font-size: 0.8em;
  width: 100px;
`;

const PostCount = styled.div`
  font-size: 0.8em;
`;

const TopWriters = () => {
  const [top5Writers, setTop5Writers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTopWritersData = async () => {
      try {
        const response = await MainAxiosApi.getTop5Writers();
        setTop5Writers(response.data);
      } catch (error) {
        console.error("Error fetching top 5 writers data:", error);
      }
    };
    fetchTopWritersData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % top5Writers.length);
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, [top5Writers]);

  return (
    <>
      {top5Writers.length > 0 && (
        <Container>
          <Rank>👑 {currentIndex + 1}위</Rank>
          <img
            src={top5Writers[currentIndex].pfImg}
            alt="Profile"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: "1px solid #eeeeee",
            }}
          />
        <Nickname>{top5Writers[currentIndex].nickname}</Nickname>
        <PostCount>{top5Writers[currentIndex].count}개</PostCount>
      </Container>
    )}
    </>
  );
};

export default TopWriters;