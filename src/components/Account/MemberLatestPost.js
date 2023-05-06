import { useState, useEffect } from 'react';
import AccountAxiosApi from '../../api/AccountAxiosApi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ParentContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 1px 1px 3px 1px #C6DEF7;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Title = styled.h3`
  align-self: flex-start;
  margin-bottom: 10px;
`;

const StyledLink = styled.span`
  position: absolute;
  font-size: 0.9rem;
  color: #1E2B4D;
  align-self: flex-end;
  text-decoration: underline;
  margin-right: 10px;
  &:hover {
    font-weight: bold;
  }
`;

const MyPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  & > *:not(:first-child) {
    border-top: 1px solid #E5E7EA;
  }
  & > *:last-child {
    border-bottom: 1px solid #E5E7EA;
  }
`;

const PostTitle = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  margin-top: 10px;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  &:hover {
    text-decoration: underline;
  }
  `;

const ExtraInfo = styled.p`
  text-align: end;
  font-size: 0.8rem;
`;
  
const NoResult = styled.p`
  padding: 20%;
  font-size: 1.2rem;
`;

const MemberLatestPost= ({ userMemberNum }) => {
  const [memberLatestPost, setMemberLatestPost] = useState([]);

  useEffect(() => {
    const fetchMemberLatestPost = async () => {
      try {
        const response = await AccountAxiosApi.getMemberLatestPost(userMemberNum);
        setMemberLatestPost(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMemberLatestPost();
  }, [userMemberNum]);

  
  return (
      <ParentContainer>
      <Title>내가 작성한 글</Title>
      <StyledLink><Link to='/mypage/mypost'>전체보기</Link></StyledLink>
      {memberLatestPost.length === 0 ? (
        <NoResult style={{textAlign: "center"}}>😱작성된 글이 없습니다. </NoResult>
      ) : (
        <MyPostContainer>
        {memberLatestPost.map((memberPost) => (
        <Link key={memberPost.postNum} to={`/post/${memberPost.postNum}`}>
          <PostTitle>{memberPost.postTitle}</PostTitle>
          <ExtraInfo>
            <i>{memberPost.boardName} {memberPost.writeDate}</i>
          </ExtraInfo>
        </Link>
        ))}
      </MyPostContainer>
    )}
  </ParentContainer>
  );
};

export default MemberLatestPost;
