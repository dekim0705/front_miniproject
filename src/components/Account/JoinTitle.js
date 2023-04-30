import React from "react";
import styled from "styled-components";


const JoinTitleWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #191F28;
  font-size: 1.2rem;

  @media (max-width: 768px) {
  font-size: 1rem;
  }
`;

const JoinTitle = () => {
  return (
    <JoinTitleWrapper>
      <h1>회원가입</h1>
    </JoinTitleWrapper>
    );
}
export default JoinTitle;