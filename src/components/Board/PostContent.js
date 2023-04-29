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
  min-height: 380px; 
  max-height: 800px; 
  overflow-y: auto; /* 스크롤바 */
`;

const StyledContent = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  white-space: pre-line;
`;

const dummyContent = "안녕하세요. 주니어 개발자입니다. \n 제가 처음 개발자로 취업한 이야기를 공유합니다. \n 혹시나 비슷한 고민을 하고 있는 분들에게 조금이나마 도움이 될 수 있으면 좋겠습니다!";

const Content = () => {
  return (
    <Wrapper>
      <Board>
        <StyledContent>{dummyContent}</StyledContent>
      </Board>
    </Wrapper>
  );
};

export { Content, dummyContent };
export default Content;