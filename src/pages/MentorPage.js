import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserInfo";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Start from "../components/Mentor/Start";
import Loading from "../components/Mentor/Loading";
import MatchResult from "../components/Mentor/MatchResult";

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
      <Routes>
        <Route index path="/" element={<Start />} />
        <Route path="loading" element={<Loading />} />
        <Route path="result" element={<MatchResult />} />
      </Routes>
    </>
  );
}

export default MentorPage;