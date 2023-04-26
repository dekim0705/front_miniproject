import Header from "../components/Header";
import Main from "../components/Main/Main";
import MentorButton from "../components/Main/MentorButton";
import WriteButton from "../components/Main/WriteButton";
import Board from "../components/Main/Board";
import styled from "styled-components";
import Footer from "../components/Footer";

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
        <Board />
        <Board />
        <Board />
        <Board />
      </BoardContainer>
      <Footer />
      <WriteButton />
      <MentorButton />
    </>
  );
}

export default HomePage;