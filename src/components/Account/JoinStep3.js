import React from 'react';
import JoinTitle from './JoinTitle';
import ProgressBar from './JoinProgressBar';
import NewMemberInfo2 from './JoinNewMemberInfo2';

const JoinStep3 = () => {  

  return(
    <>
      <JoinTitle>회원가입</JoinTitle>
      <ProgressBar currentStep={3} totalSteps={4} />
      <NewMemberInfo2 />
    </>
  );
}
export default JoinStep3;