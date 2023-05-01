// QnA Page
import React from "react";
import BoardList from "../components/Board/BoardList";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import SearchInput from "../components/Board/Search";
import Pages from "../components/Board/Paginations";
import Footer from "../components/Footer";
import WriteButton from "../components/Board/WriteButton";


const BoardName = styled.div`
  font-size: 2rem;
  margin: 30px 0px 10px 130px;
  padding : 10px 0px 0px 100px;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
    margin: 30px 0 10px 0;
    padding: 10px 0;
  }

`;
const WriteButtonWrapper = styled.div`

text-align: right;
padding-top : 30px;
  margin-right: 220px;
`;

const QnAPage = () => {
  const { pageNum } = useParams();
  return (

  <>
    <Header />
    <BoardName>
      Q&A 
    </BoardName>
    <SearchInput />
    <BoardList boardName="qna" pageNum={pageNum} />
    <WriteButtonWrapper>
      <WriteButton />
    </WriteButtonWrapper>
    <Pages boardNum={1} path="/qna" />
    <Footer />
  </>


  );
};


export default QnAPage;