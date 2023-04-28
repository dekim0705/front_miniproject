import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserInfo";
import Start from "../components/Mentor/Start";

const MentorPage = () => {
  const context = useContext(UserContext);
  const {userEmail, userPwd} = context;
  const navigate = useNavigate();

  useEffect(() => {
    if(!userEmail || !userPwd) {
      navigate('/login', {replace: true});
    }
  }, [userEmail, userPwd, navigate]);
  
  return (
    <>
      <Header />
      <Start />
    </>
  );
}

export default MentorPage;