import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserInfo";
import Header from "../components/Header";
import WriteForm from "../components/Board/WriteFormContainer";
import WriteButton from "../components/Board/SubmitButton";
import ImgUploadButton from "../components/Board/FileUpload";

const WrtiePage = () => {
  // const context = useContext(UserContext);
  // const {userEmail, userPwd} = context;
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if(!userEmail || !userPwd) {
  //     navigate('/login', {replace: true});
  //   }
  // }, [userEmail, userPwd, navigate]);

  return (
    <>
      <Header />
    <WriteForm />
    <ImgUploadButton/>
    <WriteButton/>
    </>
  );
}

export default WrtiePage;