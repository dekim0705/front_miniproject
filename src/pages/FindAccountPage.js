import React from "react";
import {FindNickname, FindPassword} from "../components/Account/FindAccount";
import Logo from "../components/Logo";
import styled from "styled-components";
import Divider from '@mui/material/Divider';

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

const FindAccountPage = () => {

  return (
    <StyledWrapper>
      <Logo />
      <StyledContainer>
        <FindNickname />
        <Divider orientation="vertical" flexItem />
        <FindPassword />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default FindAccountPage;