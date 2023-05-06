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

const StyledLink = styled.a`
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

const MyReplyContainer = styled.div`
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

const ReplyContent = styled.p`
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

const MemberLatestReply = ({ userMemberNum }) => {
  const [memberLatestReply, setMemberLatestReply] = useState([]);

  useEffect(() => {
    const fetchMemberLatestReply = async () => {
      try {
        const response = await AccountAxiosApi.getMemberLatestReply(userMemberNum);
        setMemberLatestReply(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMemberLatestReply();
  }, [userMemberNum]);
  
  return (
    <ParentContainer>
    <Title>내가 작성한 댓글</Title>
    <StyledLink><Link to='/mypage/myreply'><u>전체보기</u></Link></StyledLink>
    {memberLatestReply.length === 0 ? (
      <NoResult style={{textAlign: "center"}}>😱작성된 댓글이 없습니다. </NoResult>
    ) : (
      <MyReplyContainer>
        {memberLatestReply.map((memberReply) => (
          <Link key={memberReply.postNum} to={`/post/${memberReply.postNum}`}>
            <ReplyContent>{memberReply.replyContent}</ReplyContent>
            <ExtraInfo>
              <i>{memberReply.boardName} {memberReply.writeDate}</i>
            </ExtraInfo>
          </Link>
        ))}
      </MyReplyContainer>
    )}
  </ParentContainer>
);
        };

export default MemberLatestReply;
