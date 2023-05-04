import React from "react";
import ResetPassword from "../components/Account/ResetPassword";
import Logo from "../components/Logo";
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ResetPwdPage = () => {

  return(
    <StyledWrapper>
      <Logo />
      <StyledContainer>
        <ResetPassword />
      </StyledContainer>
    </StyledWrapper>
  );
}
export default ResetPwdPage;