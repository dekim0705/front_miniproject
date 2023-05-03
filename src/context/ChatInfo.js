import { createContext, useState } from "react";
export const ChatContext = createContext(null);

const ChatStore = (props) => {
  const [chatNum, setChatNum] = useState("");

  return (
    <ChatContext.Provider value = {{ chatNum, setChatNum }}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatStore;
