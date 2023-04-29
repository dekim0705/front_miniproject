import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserInfo';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from './Logo';
import Navbar from './Navbar';
import AuthDropDown from './AuthDropDown';
import MemberDropDown from './MemberDropDown';

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
  .topMember {
    width: 200px;
    padding: 10px 0;
    text-align: center;
    border: 3px outset #C6DEF7;
    border-radius: 15px;
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
      console.log("뭐냐");
    } else setIsLogin(false);
  }, [userEmail, userPwd]);

  return (
    <StyledHeader>
      <nav className="navbar">
        <Logo />
        <ul className="navbar__menu">
          <StyledLink to="/mentor">멘토 찾기</StyledLink>
          <StyledLink to="/information">정보 공유</StyledLink>
          <StyledLink to="/portfolio">포트폴리오</StyledLink>
          <StyledLink to="/worker">직장인</StyledLink>
          <StyledLink to="/best">베스트</StyledLink>
          <StyledLink to="/qna">Q&A</StyledLink>
        </ul>
        <div className="topMember">💎 리액트흑흑 45 📝</div>
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
