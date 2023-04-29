import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import TagList, { dummyTags }  from '../components/Board/TagList';
import PostInfo,{post} from '../components/Board/PostInfo';
import Content, {dummyContent} from '../components/Board/PostContent';
import LikeButton from '../components/Board/LikeButton';
import CommentForm from '../components/Board/CommentForm';
import CommentList, {comments} from '../components/Board/CommentList';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const BoardWrapper = styled.div`
  width: 70%;
  padding: 30px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const TagListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentWrapper = styled.div`
  width: 67%;
  margin-top: 10px;
  border-top : solid 1px #ccc;
`;

const PostDetailPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <BoardWrapper>
          <PostInfo post={post} />
          <Content content={dummyContent} />
          <TagListWrapper>
            <TagList tags={dummyTags} />
            <LikeButton />
          </TagListWrapper>
        </BoardWrapper>
        <CommentWrapper>
        <CommentForm />
          <CommentList comments={comments}  />
        </CommentWrapper>
      </Wrapper>
    </>
  );
};



export default PostDetailPage;