import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserInfo";
import Header from "../components/Header";
import WriteForm from "../components/Board/WriteForm";
import Footer from "../components/Footer";


const WritePage = () => {
  const context = useContext(UserContext);
  const {userEmail, userPwd, userNum} = context;
  const navigate = useNavigate();

  useEffect(() => {
    if(!userEmail || !userPwd) {
      navigate('/login', {replace: true});
    }
  }, [userEmail, userPwd, navigate]);
   

  return (
    <>
      <Header />
      <WriteForm userNum={userNum} />
     <Footer />
    </>
  );
};

export default WritePage;