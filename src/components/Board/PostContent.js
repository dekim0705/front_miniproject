// 게시글의 내용을 나타내는 컴포넌트 (본문 및 첨부이미지)
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius : 10px;
  padding: 5px 30px;
  min-height: 390px; 
  max-height: 800px; 
  overflow-y: auto; /* 스크롤바 */
`;

const StyledContent = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  white-space: pre-line;
`;


const Content = ({ content }) => {
  return (
    <Wrapper>
      <Board>
        <StyledContent>{content}</StyledContent>
      </Board>
    </Wrapper>
  );
};


export default Content;