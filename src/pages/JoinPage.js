import React from "react";
import Logo from "../components/Logo"
import Footer from "../components/Footer";
import JoinStep1 from "../components/Account/JoinStep1";
import JoinStep2 from "../components/Account/JoinStep2";
import JoinStep3 from "../components/Account/JoinStep3"





const JoinPage = () => {

  return (
    <>
      <Logo />
      <JoinStep1 /> 
      <JoinStep2 />
      <JoinStep3 />
      <Footer />
    </>
  );
}

export default JoinPage;