// 댓글 작성 창
import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';



const CommentFormWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  margin-bottom : 50px;
  border-radius : 20px;
  padding: 25px;
  border: 1px solid #ccc;
`;

const CommentFormAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;


const CommentFormButton = styled.button`
  background-color: rgb(73,115,228);
  color: white;
  margin-left : 10px;
  padding: 12px 20px;
  border-radius: 20px;
  font-size: 15px;
  border : none;
  cursor: pointer;
  display: flex;
  justify-content : center;
  align-items: center;
  height : 70px;
  text-align : center;
  width : 80px;
  

  &:hover {
    background-color: rgb(53, 85, 168);
  }

`;
const CommentFormTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    height: 40px;
  }
  & .MuiOutlinedInput-root {
    border-radius: 20px;

  }
  
`;



const CommentFrom = () => {
  return(
  
    <>
  <CommentFormWrapper>
      <CommentFormAvatar src="https://via.placeholder.com/40" />
   
      <CommentFormTextField fullWidth label="댓글 작성" id="fullWidth" />
  
      <CommentFormButton>등록</CommentFormButton>
    </CommentFormWrapper>

    </>

  )

}

export default CommentFrom;