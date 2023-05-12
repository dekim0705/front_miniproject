import { useEffect, useState } from 'react';
import boardAxiosApi from '../api/BoardAxiosApi';
import BoardList from "../components/Board/BoardList";
import styled from "styled-components";
import Header from "../components/Header";
import SearchInput from "../components/Board/Search";
import Pages from "../components/Board/Paginations";
import Footer from "../components/Footer";
import WriteButton from "../components/Board/WriteButton";
import { useParams } from "react-router-dom";

const BoardName = styled.div`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  padding : 70px 0px 5px 0px;
  
  @media (max-width: 768px) {
    text-align: center;
    margin: 30px 0 10px 0;
    padding: 10px 0;
    font-size: 1.6rem;
  }
`;

const WriteButtonWrapper = styled.div`
  text-align: right;
  padding-top : 30px;
  margin-right: 220px;

  @media (max-width: 400px) {
    margin-right : 40px;
  }
`;


const BestPage = () => {
  const { pageNum } = useParams();
  const [resultData, setResultData] = useState(null);
  const [keyword, setKeyword] = useState("");
  
  const handleSetResultData = (data) => {
    setResultData(data);
  };
  const handleSetKeyword = (newKeyword) => {
    setKeyword(newKeyword);
  }

  useEffect(() => {
    boardAxiosApi.moveBestBoard();
  }, []);
  return (
    <>
      <Header />
      <BoardName>
     BEST
    </BoardName>
    <SearchInput boardName="best" pageNum={pageNum} setResultData={handleSetResultData}setKeyword={handleSetKeyword}/>
      <BoardList boardName="best" pageNum={pageNum} resultData={resultData}/>
      <WriteButtonWrapper>
        <WriteButton />
      </WriteButtonWrapper>
      {resultData && <Pages boardNum={5} path="/best" keyword={keyword} resultData={resultData} />}
      {!resultData && <Pages boardNum={5} path="/best" />}
    <Footer />
    </>
  );
}

export default BestPage;