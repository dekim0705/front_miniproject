import Header from "../components/Header";
import { useNavigate, Navigate } from "react-router-dom";

const MentorPage = () => {
  const nav = useNavigate();
  const isLogin = false;

  if(!isLogin) {
    return <Navigate to='/login' replace={true} />;
  }
  return (
    <>
      <Header />
    </>
  );
}

export default MentorPage;