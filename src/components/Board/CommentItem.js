import React from 'react';
import styled from 'styled-components';

const CommentItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 20px;
`;

const CommentItemImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CommentItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 1000px;
`;

const CommentItemAuthor = styled.span`
  font-weight: bold;
  margin-left: 5px;
  
`;

const CommentItemContent = styled.span`
  margin-top: 5px;
  padding: 15px;
  border-radius: 15px;
  border: 1px solid #c4c4c4;
  display: inline-block;
  height: 50px;
  font-size: 0.9rem;
`;

const CommentItem = ({ comment }) => {
  const { author, content, avatar } = comment;
  return (
    <CommentItemWrapper>
      <CommentItemImg src={avatar} />
      <CommentItemContentWrapper>
        <CommentItemAuthor>{author}</CommentItemAuthor>
        <CommentItemContent>{content}</CommentItemContent>
      </CommentItemContentWrapper>
    </CommentItemWrapper>
  );
};

export default CommentItem;
