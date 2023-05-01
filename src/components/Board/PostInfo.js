import styled from 'styled-components';
import tmpProfileImg from "../../resource/profile.PNG"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: flex-start; 
  padding-left: 20px;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%; 
  font-size: 0.9rem;
  color: #666;
`;

const Category = styled.span`
  font-size: 1rem;
  color: #666;
  border-bottom : solid #ccc;
`;

const Author = styled.span`
  margin-left: 10px;
`;

const Date = styled.span`
  margin-right: 15px;
`;

const Views = styled.span`
  margin-right: 15px;
`;

const Likes = styled.span`
  margin-right: 30px;
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
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

const post = {
  boardName: "정보 공유",
  title: "주니어 개발자의 이야기",
  nickname: "양갱",
  date: "2023.04.30",
  views: 130,
  likes: 50,
};


const PostInfo = ({ post }) => {
  return (
    <Wrapper>
      <Category>{post.boardName}</Category>
      <Title>{post.title}</Title>
      <Info>
      <AuthorWrapper>
          <ProfileImg/>
          <Author>{post.nickname}</Author>
        </AuthorWrapper>
        <div>
          <Date> 작성날짜 : {post.date}</Date>
          <Views>조회수 : {post.views}</Views>
          <Likes>추천수 : {post.likes}</Likes>
        </div>
      </Info>
    </Wrapper>
  );
};

export { PostInfo, post };
export default PostInfo;
