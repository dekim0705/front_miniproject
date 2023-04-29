import React from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';

const CommentListWrapper = styled.div`
  margin-top: 20px;
`;

const CommentListTitle = styled.h2`
  font-size: 1.2rem;
  margin: 20px;
  padding: 10px;
`;

const comments = [
  {
    id: 1,
    author: '맹고더쿠',
    content: '좋은 정보 감사합니다 ~!!!! \n 덕분에 많은 도움이 되었어요 ㅎㅎ',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 2,
    author: '딸기초코',
    content: '댓글입니다',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 3,
    author: '리액트흑흑',
    content: '댓글입니다',
    avatar: 'https://via.placeholder.com/40',
  },
];
const CommentList = ({ comments }) => {

  const commentCount = comments.length;
  return (
    <CommentListWrapper>
      <CommentListTitle>{commentCount}개의 댓글</CommentListTitle>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </CommentListWrapper>
  );
};

export { CommentList, comments };
export default CommentList;
