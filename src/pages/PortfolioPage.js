import GalleryContainer from "../components/Board/GalleryContainer";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";
import Pages from "../components/Board/Paginations";
import { useParams } from "react-router-dom";

const BoardName = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding : 70px 0px 5px 0px;
  
  @media (max-width: 768px) {
    text-align: center;
    margin: 30px 0 10px 0;
    padding: 10px 0;
    font-size: 1.6rem;
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
  const { pageNum } = useParams();
 
  return (
    <>
      <Header />
      <BoardName>
      Portfolio
    </BoardName>
    <Divider />
    <GalleryContainer pageNum={pageNum} />
      <Pages boardNum={4} path="/portfolio" />
      <Footer />
    </>
  );
}

export default PortfolioPage;