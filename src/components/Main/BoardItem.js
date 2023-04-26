import React from 'react';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TextsmsIcon from '@mui/icons-material/Textsms';
import tmpProfileImg from "../../resource/profile.PNG"

const BoardItemContainer = styled.div`
  padding: 0 10px;
  &:hover {
    background-color: #eee;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const BoardItem1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${tmpProfileImg});
  background-color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

const PostInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const ViewCount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ReplyCount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.p`
  padding: 5px 0;
`;

const BoardItem = () => {
  return (
    <BoardItemContainer>
      <BoardItem1>
        <UserInfo>
          <ProfileImg />
          <div className="nickname">양갱</div>
        </UserInfo>
        <PostInfo>
          <ViewCount>
            <VisibilityIcon />
            <p>3433</p>
          </ViewCount>
          <ReplyCount>
            <TextsmsIcon />
            <p>20</p>
          </ReplyCount>
        </PostInfo>
      </BoardItem1>
      <Title>주니어 웹 개발자가 알아야 할 ‘비동기 통신’</Title>
    </BoardItemContainer>
  );
};

export default BoardItem;