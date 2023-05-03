import React, { useState, useEffect, useContext } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import SendIcon from "@mui/icons-material/Send";
import ChatAxiosApi from "../../api/ChatAxiosApi";
import { ChatContext } from "../../context/ChatInfo";
import { UserContext } from "../../context/UserInfo";

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours >= 10 ? hours : `0${hours}`;
  const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;
  return `${formattedHours}:${formattedMinutes}`;
};

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
  background-color: #e5e7ea;
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
  color: #1e2b4d;
`;

const SendButton = styled(SendIcon)`
  cursor: pointer;
  color: #1e2b4d;
`;

export const ChatRoom = () => {
  const { chatNumber } = useContext(ChatContext);
  const { menteeNum, mentorNum, mentorNickname, mentorPfImg } =
    useContext(UserContext);
  const [client, setClient] = useState(null);

  useEffect(() => {
    const sock = new SockJS("http://localhost:8111/chat", null, {
      transports: ["websocket"],
      headers: {
        Origin: "http://localhost:3000",
      },
    });
    const newClient = new Client({
      webSocketFactory: () => sock,
      debug: (str) => {
        console.log(str);
      },
    });
    setClient(newClient);
  }, []);

  useEffect(() => {
    if (client) {
      const onConnect = () => {
        console.log("웹소켓..연결????");
      };
      const onError = (error) => {
        console.error("웹소켓 연결 실패.......하...");
      };

      client.onConnect = onConnect;
      client.onStompError = onError;

      client.activate();
    }
    return () => {
      if (client) {
        client.deactivate();
      }
    };
  }, [client]);

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const chatMessages = async (senderId, receiverId) => {
      const response = await ChatAxiosApi.chatMessages(senderId, receiverId);
      setMessages(response.data);
    };
    chatMessages(menteeNum, mentorNum);
  }, [menteeNum, mentorNum]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputMessage === "") {
      return;
    }

    const newMessage = {
      chatNumber,
      senderId: menteeNum,
      receiverId: mentorNum,
      message: inputMessage,
      isRead: 'N',
      createdAt: new Date()
    };

    try {
      await ChatAxiosApi.sendChatMessage(
        chatNumber,
        menteeNum,
        mentorNum,
        inputMessage,
        "",
        0,
        new Date(),
        'Y'
      );
      setMessages([...messages, newMessage]);
      setInputMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatRoomContainer>
      <ChatUserContainer>
        <img
          src={mentorPfImg}
          alt="Profile"
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            border: "2px solid #c6def7",
          }}
        />
        <Nickname>{mentorNickname}</Nickname>
        <InfoIcon style={{ color: "4E5968" }} />
      </ChatUserContainer>
      <ChatViewContainer>
        {messages.map((m, index) => (
          <MessageContainer key={index}>
            {m.senderId === menteeNum ? (
              <>
                <MeMessage>{m.message}</MeMessage>
                <SenderMessageInfoContainer>
                  <CreatedAt>{formatTimestamp(m.createdAt)}</CreatedAt>
                  <IsRead>{m.isRead === "Y" ? "읽음" : "안읽음"}</IsRead>
                </SenderMessageInfoContainer>
              </>
            ) : (
              <>
                <OtherUserMessage>{m.message}</OtherUserMessage>
                <MessageInfoContainer>
                  <CreatedAt>{formatTimestamp(m.createdAt)}</CreatedAt>
                  <IsRead>{m.isRead ? "읽음" : "안읽음"}</IsRead>
                </MessageInfoContainer>
              </>
            )}
          </MessageContainer>
        ))}
      </ChatViewContainer>

      <ChatInputContainer>
        <MsgInput
          type="search"
          placeholder="메시지를 입력하세요."
          value={inputMessage}
          onChange={handleInputChange}
        />
        <CodeBlock sx={{ fontSize: "2rem" }} />
        <SendButton sx={{ fontSize: "1.5rem" }} onClick={handleSendMessage} />
      </ChatInputContainer>
    </ChatRoomContainer>
  );
};

export default ChatRoom;
