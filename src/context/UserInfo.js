import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPfImgUrl, setUserPfImgUrl] = useState("");

  const resetUser = () => {
    setUserEmail('');
    setUserPwd('');
  }

  return (
    <UserContext.Provider value = {{userEmail, setUserEmail, userPwd, setUserPwd, resetUser, userPfImgUrl, setUserPfImgUrl}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserStore;