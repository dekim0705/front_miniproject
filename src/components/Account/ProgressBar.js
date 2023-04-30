import React from 'react';
import styled from 'styled-components';

const ProgressBarWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProgressBarFill = styled.div`
  height: 6px;
  border-radius: 20px;
  overflow: hidden;
  width: 40%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ProgressBarStep = styled.div`
  background-color: ${(props) => props.isCurrent ? '#3B74EC' : '#E5E7EA'};
  border-radius: 20px;
  height: 100%;
  width: 24%;
`;

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = Math.floor((currentStep / totalSteps) * 100);

  return (
      <ProgressBarWrapper className="progress-bar">
        <ProgressBarFill className="progress">
          <ProgressBarStep isCurrent={currentStep >= 1} />
          <ProgressBarStep isCurrent={currentStep >= 2} />
          <ProgressBarStep isCurrent={currentStep >= 3} />
          <ProgressBarStep isCurrent={currentStep >= 4} />
        </ProgressBarFill>
      </ProgressBarWrapper>
  );
};

export default ProgressBar;
