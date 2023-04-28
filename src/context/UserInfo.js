import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const resetUser = () => {
    setUserEmail('');
    setUserPwd('');
  }

  return (
    <UserContext.Provider value = {{userEmail, setUserEmail, userPwd, setUserPwd, resetUser}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserStore;