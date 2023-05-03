import React from 'react';
import JoinTitle from './JoinTitle';
import ProgressBar from './JoinProgressBar';
import NewMemberInfo from './JoinNewMemberInfo';

const JoinStep2 = () => {

  return (
    <>
      <JoinTitle>회원가입</JoinTitle>
      <ProgressBar currentStep={2} totalSteps={4} />
      <NewMemberInfo />
    </>
  );
};
export default JoinStep2;

