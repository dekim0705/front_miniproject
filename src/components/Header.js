import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserInfo';
import { ChatContext } from '../context/ChatInfo';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from './Logo';
import Navbar from './Navbar';
import AuthDropDown from './AuthDropDown';
import MemberDropDown from './MemberDropDown';
import TopWriters from './Main/TopWriters';
import ChatAxiosApi from '../api/ChatAxiosApi';
import { getPath } from '../util/getPath';
import useCheckUserMatched from '../util/useCheckUserMatched';

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

const StyledMember = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const { chatRoom, setChatRoom, setChatMessages } = useContext(ChatContext);
  const context = useContext(UserContext);
  const {userEmail, userPwd, userNum, isLogin, setIsLogin } = context;

  const isMatched = useCheckUserMatched(userNum);
  const mentorPath = getPath("/mentor", isMatched);

  // ✅ 로그인 한 유저가 속한 채팅방 번호 가져오기
  useEffect(() => {
    const chatRoomNum = async (memberNum) => {
      const response = await ChatAxiosApi.chatRoomNum(memberNum);
      setChatRoom(response.data);
    };
    if (userNum) {
      chatRoomNum(userNum);
    }
  }, [userNum, setChatRoom]);

  // ✅ 해당 채팅방으로 이동
  useEffect(() => {
    const chatMsg = async (chatRoomNum) => {
      const response = await ChatAxiosApi.chatMessages(chatRoomNum);
      setChatMessages(response.data);
    };
    chatMsg(chatRoom);
  }, [chatRoom, setChatMessages]);

  useEffect(() => {
    if(userEmail && userPwd) {
      setIsLogin(true);
    } else setIsLogin(false);
  }, [userEmail, userPwd, setIsLogin]);

  return (
    <StyledHeader>
      <nav className="navbar">
        <Logo />
        <ul className="navbar__menu">
          <StyledLink to={isLogin ? mentorPath : "/login"}>멘토 찾기</StyledLink>
          <StyledLink to="/information/1">정보 공유</StyledLink>
          <StyledLink to="/portfolio/1">포트폴리오</StyledLink>
          <StyledLink to="/worker/1">직장인</StyledLink>
          <StyledLink to="/best/1">베스트</StyledLink>
          <StyledLink to="/qna/1">Q&A</StyledLink>
        </ul>
        <TopWriters />
        {isLogin ? (
          <StyledMember>
            <MemberDropDown setIsLogin={setIsLogin} resetUser={context.resetUser} />
            <Navbar />
          </StyledMember>
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