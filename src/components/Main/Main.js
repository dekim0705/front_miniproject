import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import WelcomeMessage from './WelcomeMessage';
import NewPostCnt from './NewPostCnt';
import NewReplyCnt from './NewReplyCnt';
import PortfolioCnt from './PortfolioCnt';
import TotalPostCnt from './TotalPostCnt';

const StyledMainContainer = styled.div`
  .userWelcome {
    font-size: 2em;
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  gap: 40px;
  @media screen and (max-width:768px) {
    padding: 50px 0;
  }

  .value__container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
  }
  .valueItem {
    width: 140px;
    text-align: center;
    font-size: 1.3em;
    margin: 20px 0;
  }
  .valueItem > p {
    margin: 20px 0;
  }
  .valueItem > p:nth-child(1) {
    font-weight: lighter;
  }
  .valueItem > p:nth-child(2) {
    font-weight: bold;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 50%;
  }
  .search-bar {
    width: 100%;
    height: 60px;
    border-radius: 40px;
    border: 3px solid #3B74EC;
    padding: 0 15px;
  }
  .search-icon {
    width: 50px;
    height: 50px;
    fill: #fff;
  }

  @media screen and (max-width:768px) {
    .main__container {
      padding: 20px;
    }
    .search {
      width: 90%;
    }
    .value__container {
      flex-wrap: wrap;
      width: 90%;
      justify-content: center;
      gap: 0;
      box-sizing: border-box;
    }
  }
`;

const Main = () => {
  return (
      <StyledMainContainer>
      <div className="userWelcome">
        <h1>닉네임 님, 안녕하세요.</h1>
      </div>
      <WelcomeMessage />
      <div className="search">
        <input type="search" className="search-bar" />
        <SearchIcon style={{fontSize: 50}} />
      </div>
      <div className="value__container">
        <NewPostCnt />
        <NewReplyCnt />
        <PortfolioCnt />
        <TotalPostCnt />
      </div>
    </StyledMainContainer>
  );
}

export default Main;
