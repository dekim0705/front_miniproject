import React from 'react';
import styled from 'styled-components';
import ReplyForm from './ReplyForm';
import ReplyItem from './ReplyItem';

const CommentListTitle = styled.h2`
  font-size: 1.2rem;
  margin: 20px;
  padding-top: 5px;
`;

const ReplyList = ({ postNum, reply = [], fetchReply}) => {
  const commentCount = reply.length;
  return (
    <>
      <CommentListTitle> {commentCount}개의 댓글 </CommentListTitle>
        <ReplyForm postNum={postNum} fetchReply={fetchReply} />
         {reply.map((reply) => (
        <ReplyItem key={reply.nickname} reply={reply} fetchReply={fetchReply} />
      ))}
    </>
  );
};

export default ReplyList;