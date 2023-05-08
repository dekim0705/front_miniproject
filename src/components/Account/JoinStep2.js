import React, { useContext } from 'react';
import JoinTitle from './JoinTitle';
import ProgressBar from './JoinProgressBar';
import NewMemberInfo from './JoinNewMemberInfo';
import { MemberInfoContext } from "../../context/MemberInfo";


const JoinStep2 = () => {
  const { memberInfo, setMemberInfo } = useContext(MemberInfoContext);

    // 모든 정보 확인하기
    console.log(memberInfo);
    
  return (
    <>
      <JoinTitle>회원가입</JoinTitle>
      <ProgressBar currentStep={2} totalSteps={4} />
      <NewMemberInfo memberInfo={memberInfo} setMemberInfo={setMemberInfo} />
    </>
  );
};
export default JoinStep2;

