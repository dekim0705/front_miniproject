import React from "react";
import Header from "../components/Header";
import ChatRoom from "../components/Chatting/ChatRoom";
import ChatUserInfo from "../components/Chatting/ChatUserInfo";
import styled from "styled-components";

const StyledChatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
const ChatPage = () => {

  return (
    <>
      <Header />
      <StyledChatContainer>
        <ChatRoom />
        <ChatUserInfo />
      </StyledChatContainer>
    </>
  );
}

export default ChatPage;