import { createContext, useEffect, useState } from "react";
import ChatAxiosApi from "../api/ChatAxiosApi";
import TokenAxiosApi from "../api/TokenAxiosApi";
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
  const [userNickname, setUserNickname] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isWithdrawn, setIsWithdrawn] = useState("");
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    const restoreSession = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userInfoResponse = await TokenAxiosApi.userInfo(token);
          const userData = userInfoResponse.data[0];

          setUserEmail(userData.email);
          setUserPwd(userData.pwd);
          setUserPfImgUrl(userData.pfImg);
          setUserNum(userData.memberNum);
          setUserNickname(userData.nickname);
          setIsWithdrawn(userData.isWithdrawn);
        } catch (error) {
          console.error("세션 복구 중 오류 발생 : ", error);
        }
      }
    };
    restoreSession();
  }, []);

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
    <UserContext.Provider value = {{userEmail, setUserEmail, userPwd, setUserPwd, resetUser, userPfImgUrl, setUserPfImgUrl, mentorNickname, setMentorNickname, mentorPfImg, setMentorPfImg, menteeNickname, setMenteeNickname, menteePfImg, setMenteePfImg, mentorNum, setMentorNum, menteeNum, setMenteeNum, userNum, setUserNum, matchNum, setMatchNum, userNickname, setUserNickname, isLogin, setIsLogin, isWithdrawn, setIsWithdrawn, isActive, setIsActive}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserStore;