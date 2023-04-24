import Header from "../components/Header";
import { Navigate } from "react-router-dom";

const MentorPage = () => {
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