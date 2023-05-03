import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserInfo";
import Header from "../components/Header";
import WriteForm from "../components/Board/WriteFormContainer";
import boardAxiosApi from "../api/BoardAxiosApi";
import ImgUploadButton from "../components/Board/FileUpload";
import Footer from "../components/Footer";


const WrtiePage = () => {
  const context = useContext(UserContext);
  const {userEmail, userPwd, userNum} = context;
  const navigate = useNavigate();

  useEffect(() => {
    if(!userEmail || !userPwd) {
      navigate('/login', {replace: true});
    }
  }, [userEmail, userPwd, navigate]);

  const handleWritePost = async (post) => {
    try {
      const postNum = await boardAxiosApi.writePost(post);
      console.log('게시글 작성에 성공했습니다.');
      if (postNum) {
        navigate(`/post/${postNum}`);
      } else {
        console.error('게시글 작성에 실패했습니다.');
      }
    } catch (error) {
      console.error('게시글 작성에 실패했습니다.', error);
    }
  };

  const handleSubmit = (post) => {
    handleWritePost(post);
  }
   

  return (
    <>
      <Header />
    <WriteForm userNum={userNum} onSubmit={handleSubmit}  />
    <ImgUploadButton/>
   
    <Footer />
    </>
  );
};

export default WrtiePage;