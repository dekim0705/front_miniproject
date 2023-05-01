import React from "react";
import styled from "styled-components";
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import SendIcon from '@mui/icons-material/Send';

const ChatRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 80vh;
  background-color: #fff;
  border: 1px solid #eee;
  padding: 20px 20px 20px 20px;
  border-radius: 30px;
  @media screen and (max-width: 768px) {
    margin: 0 10px;
  }
`;

const ChatUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 0 10px 15px 10px;
  border-bottom: 1px solid #eee;
`;

const PfImg = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #c6def7;
  border-radius: 50%;
`;

const Nickname = styled.div`
  font-weight: bolder;
  font-size: 1.2em;
`;

const ChatViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;
`;

const Message = styled.div`
  display: inline-block;
  max-width: 70%;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 1em;
  line-height: 1.4;
  word-wrap: break-word;
`;

const OtherUserMessage = styled(Message)`
  align-self: flex-start;
  background-color: #E5E7EA;
  color: #000;
`;

const MeMessage = styled(Message)`
  align-self: flex-end;
  background-color: #3b74ec;
  color: #fff;
`;

const MessageInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;

const SenderMessageInfoContainer = styled(MessageInfoContainer)`
  justify-content: flex-end;
`;

const IsRead = styled.div`
  font-size: 0.8em;
`;

const CreatedAt = styled.div`
  font-size: 0.8em;
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 3px;
`;

const MsgInput = styled.input`
  flex-grow: 1;
  border-radius: 15px;
  border: 1px solid #eee;
  padding: 0 10px;
  height: 50px;
`;

const CodeBlock = styled(CodeIcon)`
  cursor: pointer;
  color: #1E2B4D;
`;

const SendButton = styled(SendIcon)`
  cursor: pointer;
  color: #1E2B4D;
`;

export const ChatRoom = () => {
  return (
      <ChatRoomContainer>
        <ChatUserContainer>
          <PfImg />
          <Nickname>양갱좋아</Nickname>
          <InfoIcon style={{color: '4E5968'}} />
        </ChatUserContainer>
        <ChatViewContainer>
          <MessageContainer>
            <OtherUserMessage>안녕하세요! 반갑습니다.</OtherUserMessage>
            <MessageInfoContainer>
              <CreatedAt>12:23 PM</CreatedAt>
              <IsRead>읽음</IsRead>
            </MessageInfoContainer>
          </MessageContainer>
          <MessageContainer>
            <MeMessage>네, 안녕하세요. 만나서 반갑습니다.</MeMessage>
            <SenderMessageInfoContainer>
              <CreatedAt>12:45 PM</CreatedAt>
              <IsRead>읽음</IsRead>
            </SenderMessageInfoContainer>
          </MessageContainer>
          <MessageContainer>
            <OtherUserMessage>
              궁금한거 있으시면 편하게 물어보세요~
            </OtherUserMessage>
            <MessageInfoContainer>
              <CreatedAt>12:48 PM</CreatedAt>
              <IsRead>읽음</IsRead>
            </MessageInfoContainer>
          </MessageContainer>
          <MessageContainer>
            <MeMessage>취업 준비중인데 면접 관련 궁금한게 있습니다!</MeMessage>
            <SenderMessageInfoContainer>
              <CreatedAt>12:50 PM</CreatedAt>
              <IsRead>읽음</IsRead>
            </SenderMessageInfoContainer>
          </MessageContainer>
        </ChatViewContainer>
        <ChatInputContainer>
          <MsgInput type="search" placeholder="메시지를 입력하세요." />
          <CodeBlock sx={{ fontSize: "2rem" }} />
          <SendButton sx={{ fontSize: "1.5rem" }} />
        </ChatInputContainer>
      </ChatRoomContainer>
  );
};

export default ChatRoom;
