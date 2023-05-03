import React from "react";
import styled from 'styled-components';
import Button from '@mui/material/Button';



const ButtonWrapper = styled.div`
   display: flex;
  justify-content: flex-end;
  margin-top: 18px;
  padding-right : 150px;
  margin-right : 70px;
  padding-bottom : 100px;
`;



const WriteButton = ({onClick}) => {
 

  return (
    <ButtonWrapper>
       <Button variant="contained" style={{ borderRadius: "20px", fontSize: "18px", padding: "8px 25px"}} onClick={onClick}>등록</Button>
    </ButtonWrapper>
  );
};

export default WriteButton;
