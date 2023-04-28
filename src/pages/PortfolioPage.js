import GalleryContainer from "../components/Board/GalleryContainer";
import Header from "../components/Header";
import styled from "styled-components";


const BoardName = styled.div`
  font-size: 1.8rem;
  margin: 30px 0px 10px 150px;
  padding : 10px 0px 0px 100px;
  width: 100%;
  
  @media (max-width: 768px) {
    text-align: center;
    margin: 30px 0 10px 0;
    padding: 10px 0;
  }
`;

const PortfolioPage = () => {

  return (
    <>
      <Header />
      <BoardName>
      포트폴리오 게시판
    </BoardName>
      <GalleryContainer />
    </>
  );
}

export default PortfolioPage;