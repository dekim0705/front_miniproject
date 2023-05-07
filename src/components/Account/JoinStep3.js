import React, { useContext } from 'react';
import JoinTitle from './JoinTitle';
import ProgressBar from './JoinProgressBar';
import NewMemberInfo2 from './JoinNewMemberInfo2';
import { MemberInfoContext } from "../../context/MemberInfo";


const JoinStep3 = () => {  
  const { memberInfo, setMemberInfo } = useContext(MemberInfoContext);

    // 모든 정보 확인하기
    console.log(memberInfo);
    
  return(
    <>
      <JoinTitle>회원가입</JoinTitle>
      <ProgressBar currentStep={3} totalSteps={4} />
      <NewMemberInfo2 memberInfo={memberInfo} setMemberInfo={setMemberInfo} />
    </>
  );
}
export default JoinStep3;