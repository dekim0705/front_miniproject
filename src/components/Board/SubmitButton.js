import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
   display: flex;
  justify-content: flex-end;
  margin-top: 18px;
  padding-right : 150px;
  margin-right : 70px;
  padding-bottom : 100px;
`;


const Button = styled.button`
  padding: 8px 16px;
  font-size:18px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

`;

const WriteButton = ({onClick}) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>등록</Button>
    </ButtonWrapper>
  );
};

export default WriteButton;
