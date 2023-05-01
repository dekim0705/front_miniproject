import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TextsmsIcon from '@mui/icons-material/Textsms';
import MainAxiosApi from '../../api/MainAxiosApi';

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
  font-size: 0.8em;
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
  margin: 0;
`;

const LatestInformationItem = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchLatest5Information = async () => {
      try {
        const response = await MainAxiosApi.latest5InformationPosts();
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("정보공유 최근 게시글 불러오기 에러😱", error);
      }
    };
    fetchLatest5Information();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <BoardItemContainer key={post.id}>
          <BoardItem1>
            <UserInfo>
              <img src={post.pfImg} alt='profile'
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                border: "1px solid #eeeeee",
              }}
            />
              {post.nickname}
            </UserInfo>
            <PostInfo>
              <ViewCount>
                <VisibilityIcon />
                <p>{post.viewCount}</p>
              </ViewCount>
              <ReplyCount>
                <TextsmsIcon />
                <p>{post.commentCount}</p>
              </ReplyCount>
            </PostInfo>
        </BoardItem1>
        <Title>{post.title}</Title>
        </BoardItemContainer>
      ))}
    </>
  );
};

export default LatestInformationItem;