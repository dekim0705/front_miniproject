import styled from 'styled-components';


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
  margin-left : 5px;
`;


const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const BoardNames = (boardName) => {
  switch (boardName) {
    case "QnA":
      return "Q&A";
    case "Information":
      return '정보 공유';
    case "Worker":
      return '직장인';
    case "Portfolio":
      return '포트폴리오';
    case "Best":
      return '베스트';
    default:
      return boardName;
  }
};


const PostInfo = ({ postDetail }) => {
  console.log(postDetail);
  return  (
    <Wrapper>
      <Category>{BoardNames(postDetail.boardName)}</Category>
      <Title>{postDetail.title}</Title>
      <Info>
      <AuthorWrapper>
      <ProfileImg src={postDetail.pfImg} alt="프로필 이미지" />
          <Author>{postDetail.nickname}</Author>
        </AuthorWrapper>
        <div>
          <Date> 작성날짜 : {postDetail.writeDate}</Date>
          <Views>조회수 : {postDetail.viewCount}</Views>
          <Likes>추천수 : {postDetail.likeCount}</Likes>
        </div>
      </Info>
    </Wrapper>
   
  );
};


export default PostInfo;
