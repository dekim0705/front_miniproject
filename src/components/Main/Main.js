import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const StyledMainContainer = styled.div`
  .userWelcome {
    font-size: 2em;
    display: none;
  }
  .welcomeMessage {
    font-size: 2em;
    text-align: center;
  }
  .welcomeMessage > p {
    margin: 10px 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  gap: 40px;

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
    border-radius: 25px;
    border: 3px solid #3B74EC;
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
    .welcomeMessage {
      padding: 0 10px;
      font-size: 1.7em;
    }
  }
`;

const Main = () => {
  return (
      <StyledMainContainer>
      <div className="userWelcome">
        <h1>닉네임 님, 안녕하세요.</h1>
      </div>
      <div className="welcomeMessage">
        <p>이미 00,000명의 개발자가 함께하고 있습니다.</p>
        <p>지금 바로 검색해보세요!</p>
      </div>
      <div className="search">
        <input type="search" className="search-bar" />
        <SearchIcon style={{fontSize: 50}} />
      </div>
      <div className="value__container">
        <div className="valueItem newPost">
          <p>새 글</p>
          <p>456</p>
        </div>
        <div className="valueItem newReply">
          <p>새 댓글</p>
          <p>120</p>
        </div>
        <div className="valueItem portfolio">
          <p>포트폴리오</p>
          <p>231</p>
        </div>
        <div className="valueItem totalPost">
          <p>누적 게시글</p>
          <p>34,232</p>
        </div>
      </div>
    </StyledMainContainer>
  );
}

export default Main;
