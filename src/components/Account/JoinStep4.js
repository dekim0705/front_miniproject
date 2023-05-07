import React, { useContext } from 'react';
import JoinTitle from './JoinTitle';
import ProgressBar from './JoinProgressBar';
import CompleteMessage from './JoinCompleteMessage';
import { MemberInfoContext } from "../../context/MemberInfo";

const JoinStep4 = () => {

  const memberInfo = useContext(MemberInfoContext); // 모든 정보를 담고 있는 MemberInfo 컨텍스트 가져오기

    // 모든 정보 확인하기
    console.log(memberInfo);

    
  return (
    <>
      <JoinTitle>🎉 환영합니다 🎉</JoinTitle>
      <ProgressBar currentStep={4} totalSteps={4} />
      <CompleteMessage memberInfo={memberInfo}/>
    </>
  );
};

export default JoinStep4;

