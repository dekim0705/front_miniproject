import React, {useState, useEffect } from "react";
import styled from "styled-components";
import BoardItem from "./BoardItem";
import MainAxiosApi from "../../api/MainAxiosApi";

const BoardContainer = styled.div`
  width: calc(50% - 200px);
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
const BoardName = styled.div`
  width: 100%;
  background-color: #c6def7;
  text-align: center;
  height: 60px;
  line-height: 60px;
  color: #fff;
  border-radius: 30px;
`;
const BoardNameText = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
`;
const BoardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 20px;
  gap: 20px;
`;
const Board = ({ name, category }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const boardNum = {
          information: 1,
          portfolio: 2,
          best: 3,
          qna: 4
        }[category];

        const response = await MainAxiosApi.latestPosts(boardNum);
        setPosts(response.data);
      } catch (error) {
        console.error("😱"+category, error);
      }
    };
    fetchLatestPosts();
  },[category]);

  return (
    <BoardContainer>
      <BoardName>
        <BoardNameText>{name}</BoardNameText>
      </BoardName>
      <BoardBodyContainer>
        {posts.map((post) => (
          <BoardItem key={post.postNum} post={post} />
        ))}
      </BoardBodyContainer>
    </BoardContainer>
  );
};

export default Board;
