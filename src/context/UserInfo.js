import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPfImgUrl, setUserPfImgUrl] = useState("");
  const [mentorNickname, setMentorNickname] = useState("");
  const [mentorPfImg, setMentorPfImg] = useState("");
  const [menteeNickname, setMenteeNickname] = useState("");
  const [menteePfImg, setMenteePfImg] = useState("");

  const resetUser = () => {
    setUserEmail('');
    setUserPwd('');
  }

  return (
    <UserContext.Provider value = {{userEmail, setUserEmail, userPwd, setUserPwd, resetUser, userPfImgUrl, setUserPfImgUrl, mentorNickname, setMentorNickname, mentorPfImg, setMentorPfImg, menteeNickname, setMenteeNickname, menteePfImg, setMenteePfImg}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserStore;