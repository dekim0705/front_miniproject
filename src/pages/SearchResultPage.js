import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer"
import { SearchContext } from "../context/SearchInfo";
import defaultImage from "../resource/no_image.jpeg";
import VisibilityIcon from '@mui/icons-material/Visibility';
import TextsmsIcon from '@mui/icons-material/Textsms';
import TagList from "../components/Board/TagList";

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  * {
    margin: 0;
    box-sizing: border-box;
  }
`;

const KeywordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  h1 {
    color: #3B74EC;
  }
`;

const ResultContainer = styled.div`
  border:1px solid #C6DEF7;
  box-shadow: 1px 1px 1px #696969;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  border-radius: 30px;
  gap: 5px;
  margin-bottom: 30px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    font-size: 0.8em;
  }
`;

const PostInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Post1stItem = styled.div`
  display: flex;
  gap: 10px;
  p {
    font-size: 1.2em;
    font-weight: bolder;
  }
`;

const Post2ndItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9em;
`;

const ThumbnailContainer = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  gap: 10px;
`;

const Thumbnail = styled.div`

`;
const Content = styled.div`
`;

const SearchResultPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchInput = queryParams.get("q");
  const { resultData } = useContext(SearchContext);

  return (
    <>
      <Header />
      <Container>
        <KeywordContainer>
          <p>💙 검색 결과: </p>
          <h1>{searchInput}</h1>
        </KeywordContainer>
        {resultData.map((result) => (
          <ResultContainer key={result.postNum}>
            <UserInfoContainer>
              <img
                src={result.pfImg}
                alt="Profile"
                style={{ width: 30, height: 30, borderRadius: "50%" }}
              />
              <p>{result.nickname}</p>
            </UserInfoContainer>
            <PostInfoContainer>
              <Post1stItem>
                <p>{result.title}</p>
              </Post1stItem>
              <Post2ndItem>
                <p>{result.writeDate}</p>
                <VisibilityIcon sx={{ fontSize: "1rem" }} />
                <p>{result.viewCount}</p>
                <TextsmsIcon sx={{ fontSize: "1rem" }} />
                <p>{result.replyCount}</p>
              </Post2ndItem>
            </PostInfoContainer>
            <ThumbnailContainer>
              <Thumbnail>
                <img
                  src={result.imgUrl || defaultImage}
                  alt="Profile"
                  style={{ width: 200, height: 200, borderRadius: "50%" }}
                />
              </Thumbnail>
              <Content>{result.content}</Content>
            </ThumbnailContainer>
            <TagList tags={result.tag} searchPage />
          </ResultContainer>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default SearchResultPage;