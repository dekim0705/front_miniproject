import React from "react";
import Logo from "../components/Logo"
import Footer from "../components/Footer";
// import JoinStep1 from "../components/Account/JoinStep1";
import JoinStep2 from "../components/Account/JoinStep2";



const JoinPage = () => {

  return (
    <>
      <Logo />
      {/* <JoinStep1 />  */}
      <JoinStep2 />
      <Footer />
    </>
  );
}

export default JoinPage;