import styled from "styled-components";
import LatestPortfolioItem from "./LatestPortfolioItem";

const BoardContainer = styled.div`
  width: calc(50% - 200px);
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
const BoardName = styled.div`
  width: 100%;
  background-color: #c6def7;
  text-align: center;
  height: 60px;
  line-height: 60px;
  color: #fff;
  border-radius: 30px;
`;
const BoardNameText = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
`;
const BoardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 20px;
  gap: 20px;
`;
const LatestPortfolio = (props) => {

  return (
    <BoardContainer>
      <BoardName>
        <BoardNameText>{props.name}</BoardNameText>
      </BoardName>
      <BoardBodyContainer>
        <LatestPortfolioItem />
      </BoardBodyContainer>
    </BoardContainer>
  );
};

export default LatestPortfolio;
