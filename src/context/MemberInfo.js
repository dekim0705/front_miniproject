import React, { createContext, useState } from "react";

export const MemberInfoContext = createContext();

const MemberProvide = ({ children }) => {
  const [memberInfo, setMemberInfo] = useState({
      email: "",
      pwd: "",
      nickname: "",
      job: "",
      year: "",
      pfImg: "",
      techStacks: [],
  });

  return (
    <MemberInfoContext.Provider value={{ memberInfo, setMemberInfo}}>
      {children}
    </MemberInfoContext.Provider>
  );
}
export default MemberProvide;