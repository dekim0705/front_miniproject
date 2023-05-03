import { createContext, useState } from "react";
export const ChatContext = createContext(null);

const ChatStore = (props) => {
  const [chatNumber, setChatNumber] = useState("");

  return (
    <ChatContext.Provider value = {{ chatNumber, setChatNumber }}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatStore;
