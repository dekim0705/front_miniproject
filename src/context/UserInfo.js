import { createContext, useEffect, useState } from "react";
import ChatAxiosApi from "../api/ChatAxiosApi";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userPfImgUrl, setUserPfImgUrl] = useState("");
  const [mentorNickname, setMentorNickname] = useState("");
  const [mentorPfImg, setMentorPfImg] = useState("");
  const [mentorNum, setMentorNum] = useState("");
  const [menteeNickname, setMenteeNickname] = useState("");
  const [menteePfImg, setMenteePfImg] = useState("");
  const [menteeNum, setMenteeNum] = useState("");
  const [userNum, setUserNum] = useState("");
  const [matchNum, setMatchNum] = useState([]);

  useEffect(() => {
    const allMatchNum = async() => {
      const response = await ChatAxiosApi.allMentorMenteeNum();
      const arrayNum = [];

      response.data.forEach(data => {
        arrayNum.push(data.mentorNum);
        arrayNum.push(data.menteeNum);
      });
      setMatchNum(arrayNum);
    }
    allMatchNum();
  }, []);

  const resetUser = () => {
    setUserEmail('');
    setUserPwd('');
  }

  return (
    <UserContext.Provider value = {{userEmail, setUserEmail, userPwd, setUserPwd, resetUser, userPfImgUrl, setUserPfImgUrl, mentorNickname, setMentorNickname, mentorPfImg, setMentorPfImg, menteeNickname, setMenteeNickname, menteePfImg, setMenteePfImg, mentorNum, setMentorNum, menteeNum, setMenteeNum, userNum, setUserNum, matchNum, setMatchNum }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserStore;