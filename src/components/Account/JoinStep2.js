import React from 'react';
import JoinTitle from './JoinTitle';
import ProgressBar from './ProgressBar';
import MemberInfoField from './MemberInfoField';

const RealJoinStep2 = () => {
  return (
    <>
      <JoinTitle />
      <ProgressBar currentStep={2} totalSteps={4} />
      <MemberInfoField />
    </>
  );
};

export default RealJoinStep2;

