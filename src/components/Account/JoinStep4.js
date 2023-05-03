import React from 'react';
import JoinTitle from './JoinTitle';
import ProgressBar from './JoinProgressBar';
import CompleteMessage from './JoinCompleteMessage';

const JoinStep4 = () => {

  return (
    <>
      <JoinTitle>🎉 환영합니다 🎉</JoinTitle>
      <ProgressBar currentStep={4} totalSteps={4} />
      <CompleteMessage />
    </>
  );
};

export default JoinStep4;

