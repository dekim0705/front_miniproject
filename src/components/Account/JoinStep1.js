import React from 'react';
import JoinTitle from './JoinTitle';
import ProgressBar from './ProgressBar';
import Agreement from './Agreement';


const JoinStep1 = () => {
  return (
    <>
      <JoinTitle />
      <ProgressBar currentStep={1} totalSteps={4} />
      <Agreement />
    </>
  );
};

export default JoinStep1;

