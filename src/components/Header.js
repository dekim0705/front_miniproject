import React from 'react';
import styled from 'styled-components';
import logo from '../resource/개발러스 로고.svg'

const StyledHeader = styled.header`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  .navbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-between;
    padding: 0 30px;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li {
    list-style: none;
  }
  .navbar__logo {
    width: 10rem;
  }
  .navbar__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-align: center;
  }
  .member {
    display: flex;
    gap: 10px;
  }
  .topMember {
    width: 200px;
    padding: 10px 0;
    text-align: center;
    border: 3px solid #C6DEF7;
  }
  .navbar__menu > li {
    width: 100px;
    height: 40px;
    line-height: 40px;
    font-size: 0.8em;
  }
  .navbar__menu > li:hover {
    background-color: #1E2B4D;
    border-radius: 20px;
    color: #fff;
  }
  .navbar__menu > li:hover > a {
    color: #fff;
  }
  .box {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav className="navbar">
        <img className="navbar__logo" src={logo} alt="개발러스 로고" />
        <ul className="navbar__menu">
          <li><a href="#">멘토 찾기</a></li>
          <li><a href="#">정보 공유</a></li>
          <li><a href="#">포트폴리오</a></li>
          <li><a href="#">직장인</a></li>
          <li><a href="#">베스트</a></li>
          <li><a href="#">Q&A</a></li>
        </ul>
        <div className="topMember">💎 리액트흑흑 45 📝</div>
        <div className="member">
          <div className="box login">
            <a href="#">로그인</a>
          </div>
          <div className="box join">
            <a href="#">가입</a>
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
