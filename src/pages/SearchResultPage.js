import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { SearchContext } from "../context/SearchInfo";

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const KeywordContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ResultContainer = styled.div`
  background-color: #ddd;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PostInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: salmon;
`;

const Post1stItem = styled.div`
`;

const Post2ndItem = styled.div`
`;

const ThumbnailContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Thumbnail = styled.img`
  width: 150px;
  height: 150px;
  background-color: blue;
`;
const Content = styled.p`
`;

const TagContainer = styled.div`

`;

const SearchResultPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchInput = queryParams.get("q");
  const { resultData } = useContext(SearchContext);
  console.log(resultData);
  return (
    <>
      <Header />
      <Container>
        <KeywordContainer>
          <p>검색 결과: </p>
          <h1>{searchInput}</h1>
        </KeywordContainer>
        <ResultContainer>
          <UserInfoContainer>
            <img
              src={resultData[0].pfImg}
              alt="Profile"
              style={{ width: 50, height: 50, borderRadius: '50%' }} />
            <p>{resultData[0].nickname}</p>
          </UserInfoContainer>
          <PostInfoContainer>
            <Post1stItem>
              {resultData[0].postNum}
              {resultData[0].title}
            </Post1stItem>
            <Post2ndItem>
              {resultData[0].writeDate}
              {resultData[0].viewCount}
              {resultData[0].replyCount}
            </Post2ndItem>
          </PostInfoContainer>
          <ThumbnailContainer>
            <Thumbnail></Thumbnail>
            <Content>
              {resultData[0].content}
            </Content>
          </ThumbnailContainer>
          <TagContainer>
            {resultData[0].tag}
          </TagContainer>
        </ResultContainer>
      </Container>
    </>
  );
}

export default SearchResultPage;