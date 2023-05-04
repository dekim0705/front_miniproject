import { createContext, useState } from "react";
export const ChatContext = createContext(null);

const ChatStore = (props) => {
  const [chatNumber, setChatNumber] = useState("");
  const [chatRoom, setChatRoom] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <ChatContext.Provider value = {{ chatNumber, setChatNumber, chatRoom, setChatRoom, chatMessages, setChatMessages }}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatStore;
