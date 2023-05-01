import Header from "../components/Header";
import Main from "../components/Main/Main";
import MentorButton from "../components/Main/MentorButton";
import WriteButton from "../components/Main/WriteButton";
import styled from "styled-components";
import Footer from "../components/Footer";
import LatestInformation from "../components/Main/LatestInformation";
import LatestPortfolio from "../components/Main/LatestPortfolio";
import LatestBest from "../components/Main/LatestBest";
import LatestQnA from "../components/Main/LatestQnA";

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
        <LatestInformation name="정보공유" />
        <LatestPortfolio name="포트폴리오" />
        <LatestBest name="베스트" />
        <LatestQnA name="Q&A" />
      </BoardContainer>
      <Footer />
      <WriteButton />
      <MentorButton />
    </>
  );
}

export default HomePage;