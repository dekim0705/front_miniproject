import React from 'react';
import JoinTitle from './JoinTitle';
import ProgressBar from './JoinProgressBar';
import Agreement from './JoinAgreement';

const JoinStep1 = () => {  

  return(
    <>
      <JoinTitle>회원가입</JoinTitle>
      <ProgressBar currentStep={1} totalSteps={4} />
      <Agreement />
    </>
  );
}
export default JoinStep1;