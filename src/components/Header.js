import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserInfo';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from './Logo';
import Navbar from './Navbar';
import AuthDropDown from './AuthDropDown';
import MemberDropDown from './MemberDropDown';
import TopWriters from './Main/TopWriters';

const StyledLink = styled(Link)`
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-size: 0.8em;

  &:hover {
    background-color: #1E2B4D;
    border-radius: 20px;
    color: #fff;
  }
`;

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
    justify-content: space-between;
    padding: 0 30px;
  }
  a {
    text-decoration: none;
    color: #000;
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
  .box {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    .navbar__menu, .topMember, .login, .join {
      display: none;
    }
  }
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const context = useContext(UserContext);
  const {userEmail, userPwd} = context;

  useEffect(() => {
    if(userEmail && userPwd) {
      setIsLogin(true);
    } else setIsLogin(false);
  }, [userEmail, userPwd]);

  return (
    <StyledHeader>
      <nav className="navbar">
        <Logo />
        <ul className="navbar__menu">
          <StyledLink to="/mentor">멘토 찾기</StyledLink>
          <StyledLink to="/information/1">정보 공유</StyledLink>
          <StyledLink to="/portfolio/1">포트폴리오</StyledLink>
          <StyledLink to="/worker/1">직장인</StyledLink>
          <StyledLink to="/best/1">베스트</StyledLink>
          <StyledLink to="/qna/1">Q&A</StyledLink>
        </ul>
        <TopWriters />
        {isLogin ? (
          <MemberDropDown setIsLogin={setIsLogin} resetUser={context.resetUser} />
        ) : (
          <div className="member">
            <div className="box login">
              <Link to="/login">로그인</Link>
            </div>
            <div className="box join">
              <Link to="/join">가입</Link>
            </div>
            <AuthDropDown />
            <Navbar />
          </div>
        )}
      </nav>
    </StyledHeader>
  );
};

export default Header;
