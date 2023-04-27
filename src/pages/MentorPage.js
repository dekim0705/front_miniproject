import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserInfo";
import ImageComponent from "../components/ImageComponent";

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
      <p>멘토 찾기 페이지!!!</p>
      <ImageComponent />
    </>
  );
}

export default MentorPage;