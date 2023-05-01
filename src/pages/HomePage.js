import Header from "../components/Header";
import Main from "../components/Main/Main";
import MentorButton from "../components/Main/MentorButton";
import WriteButton from "../components/Main/WriteButton";
import styled from "styled-components";
import Footer from "../components/Footer";
import Board from "../components/Main/Board";

const BoardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: row;
  margin-bottom: 100px;
`;

const HomePage = () => {
  return (
    <>
      <Header />
      <Main />
      <BoardContainer>
        <Board name="정보공유" category="information" />
        <Board name="포트폴리오" category="portfolio" />
        <Board name="베스트" category="best" />
        <Board name="Q&A" category="qna" />
      </BoardContainer>
      <Footer />
      <WriteButton />
      <MentorButton />
    </>
  );
}

export default HomePage;