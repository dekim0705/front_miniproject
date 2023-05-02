import React from 'react';
import JoinTitle from '../Account/JoinTitle';
import ProgressBar from '../Account/ProgressBar';
import MemberExtraInfoField from './MemberExtraInfoField';


const JoinStep3 = () => {  

  return(
    <>
      <JoinTitle />
      <ProgressBar currentStep={3} totalSteps={4} />
      <MemberExtraInfoField />
    </>
  );
}
export default JoinStep3;