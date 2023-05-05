import { createContext, useState } from "react";
export const ChatContext = createContext(null);

const ChatStore = (props) => {
  const [chatNumber, setChatNumber] = useState("");
  const [chatRoom, setChatRoom] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [otherUserNumber, setOtherUserNumber] = useState("");
  const [otherUserNickname, setOtherUserNickname] = useState("");
  const [otherUserPfImg, setOtherUserPfImg]= useState("");

  return (
    <ChatContext.Provider value = {{ chatNumber, setChatNumber, chatRoom, setChatRoom, chatMessages, setChatMessages, otherUserNumber, setOtherUserNumber, otherUserNickname, setOtherUserNickname, otherUserPfImg, setOtherUserPfImg }}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatStore;
