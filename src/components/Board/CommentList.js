import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import CommentFrom from './CommentForm';

const CommentListWrapper = styled.div`
  margin: 0;
`;

const CommentListTitle = styled.h2`
  font-size: 1.2rem;
  margin: 20px;
  padding-top: 5px;
  

`;


const CommentList = ({ reply = []  }) => {

  const commentCount = reply.length;
  return (
    
    <CommentListWrapper>
      <CommentListTitle> {commentCount}개의 댓글  </CommentListTitle>
        <CommentFrom />
      {reply.map((reply) => (
        <CommentItem key={reply.nickname} reply={reply} />
      ))}
    </CommentListWrapper>
  );
};

export default CommentList;
