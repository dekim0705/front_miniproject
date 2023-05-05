import React from 'react';
import styled from 'styled-components';
import CommentItem from './ReplyItem';
import ReplyForm from './ReplyForm';
import { useContext } from 'react';
import { UserContext } from '../../context/UserInfo';

const CommentListWrapper = styled.div`
  margin: 0;
`;

const CommentListTitle = styled.h2`
  font-size: 1.2rem;
  margin: 20px;
  padding-top: 5px;
`;

const ReplyBoard = ({ postNum, reply = [], fetchReply}) => {
  const commentCount = reply.length;
  return (
    <CommentListWrapper>
      <CommentListTitle> {commentCount}개의 댓글 </CommentListTitle>
      <ReplyForm postNum={postNum} fetchReply={fetchReply} />
      {reply.map((reply) => (
        <CommentItem key={reply.nickname} reply={reply} />
      ))}
    </CommentListWrapper>
  );
};

export default ReplyBoard;