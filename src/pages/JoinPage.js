import React from "react";
import Logo from "../components/Logo"
import JoinStep1 from "../components/Account/JoinStep1";
import JoinStep2 from "../components/Account/JoinStep2";
import JoinStep3 from "../components/Account/JoinStep3"
import JoinStep4 from "../components/Account/JoinStep4";
import { Route, Routes } from "react-router-dom";
import MemberInfoProvider from "../context/MemberInfo";


const JoinPage = () => {

  return (
    <MemberInfoProvider>
      <Logo />
      <Routes>
        <Route path="/" element={<JoinStep1 />} />
        <Route path="step2" element={<JoinStep2 />} />
        <Route path="step3" element={<JoinStep3 />} />
        <Route path="step4" element={<JoinStep4 />} />
      </Routes>
    </MemberInfoProvider>
  );
}

export default JoinPage;
