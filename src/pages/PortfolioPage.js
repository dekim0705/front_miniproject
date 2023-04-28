import GalleryContainer from "../components/Board/GalleryContainer";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";
import Pages from "../components/Board/Paginations";


const BoardName = styled.div`
  font-size: 1.5rem;
  margin: 30px 0px 10px 150px;
  padding : 10px 0px 0px 100px;
  width: 100%;
  
  @media (max-width: 768px) {
    text-align: center;
    margin: 30px 0 10px 0;
    padding: 10px 0;
  }
`;
const Divider = styled.div`
  border-bottom: 1px solid #ccc;
  width : 70%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 20px;
`;
const PortfolioPage = () => {

  return (
    <>
      <Header />
      <BoardName>
      포트폴리오 게시판
    </BoardName>
    <Divider />
      <GalleryContainer />
      <Pages />
      <Footer />
    </>
  );
}

export default PortfolioPage;