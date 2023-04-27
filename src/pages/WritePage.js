import { useContext, useEffect, useeff } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserInfo";
import Header from "../components/Header";
import WriteForm from "../components/Board/WriteFormContainer";
import SelectCategory from "../components/Board/CategorySelect";
import WriteButton from "../components/Board/SubmitButton";

const WrtiePage = () => {
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
      <SelectCategory />
    <WriteForm />
    <WriteButton/>
    </>
  );
}

export default WrtiePage;