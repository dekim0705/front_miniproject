import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountAxiosApi from '../../api/AccountAxiosApi';
import { InnerWrapper, ParentWrapper } from './Wrappers';

const StyledWrapper = styled.div`
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .button {
    border-radius: 20px;
  }
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  color:  #191F28;
`;

const StyledDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  text-align: center;
  color: #1E2B4D;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Result = styled.div`
  margin-bottom: 50px;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.2rem;
  &.found {
    color: #3b74ec;
  }
  &.not_found {
    color: red;
  }
`;

export const FindNickname = () => {

  // 사용자 입력: 닉네임
  const [userNickname, setUserNickname] = useState("");  

  // 결과 메세지
  const [resultMessage, setResultMessage] = useState("");

  const onChangeNickname = (e) => {
    setUserNickname(e.target.value);
    if (e.target.value === "") {
      setResultMessage("");
    }
  }

  const onClickFindEmailButton = async() => {
    // if (userNickname === "") {return;} // 입력값이 없으면 함수를 빠져나감
    const response = await AccountAxiosApi.getMemberEmail(userNickname);
    if (response.data) {
      setResultMessage(
        <>
          회원님의 이메일은 <b>{response.data}</b>입니다.
          <br />
          <Link to="/login">
            <Button className='button' size="large"><u><b>로그인</b></u></Button>
          </Link>
        </>
      );
      console.log(`🙆🏻‍♀️우리회원이셔요! 이메일 드려!`);
    } else {
      setResultMessage(
        <>
          닉네임 <b><i>{userNickname}</i></b>은(는) 존재하지 않습니다.
          <br />
          닉네임을 확인해 주세요.
        </>
      );
      console.log(`🙅🏻‍♀️회원이아니셔! 없는 닉네임이셔!`);
    };
  };

  return (
    <ParentWrapper width="50">
      <InnerWrapper width="75">
        <StyledWrapper>
          <StyledTitle>이메일 찾기</StyledTitle>
          <StyledDescription>회원 가입 시에 입력하신 닉네임을 입력하세요.</StyledDescription>
          <TextField 
            onChange={onChangeNickname}
            label="닉네임" 
            InputProps={{ sx: { borderRadius: 6 } }} />
          <Button 
            className='button' 
            onClick={onClickFindEmailButton} 
            size="large" 
            variant="contained" 
            disabled={userNickname.length === 0}>
              이메일 찾기
          </Button>
          <Result className={resultMessage!=="" ? 'found' : 'not_found'}>
            {resultMessage}
          </Result>  
        </StyledWrapper>
      </InnerWrapper>
    </ParentWrapper>
  );
};


export const FindPassword= () => {

  // 사용자 입력: 닉네임, 이메일
  const [userNickname, setUserNickname] = useState("");  
  const [userEmail, setUserEmail] = useState("");

  // 결과 메세지
  const [resultMessage, setResultMessage] = useState("");

  const onChangeNickname = (e) => {
    setUserNickname(e.target.value);
    if (e.target.value === "") {
      setResultMessage("");
    }
  }

  const onChangeEmail = (e) => {
    setUserEmail(e.target.value);
    if (e.target.value === "") {
      setResultMessage("");
    }
  }

  const onClickFindPasswordButton = async() => {  
    const response = await AccountAxiosApi.getIsMember(userNickname, userEmail);
    if (response.data === true) {
      setResultMessage(
        <>
          <b><u>{userEmail}</u></b>로<br /> 
          비밀번호 변경 링크가 전송되었습니다.
        </>
      )
      console.log(`🙆🏻‍♀️우리회원이셔요!`);
    } else {
      setResultMessage(
        <>
          일치하는 회원정보가 존재하지 않습니다.<br />
          닉네임과 이메일을 확인해 주세요.
        </>
      );
      console.log(`🙅🏻‍♀️회원이아니셔!`);
    };
  };

  return(
    <ParentWrapper width="50">
      <InnerWrapper width="75">
        <StyledWrapper>
          <StyledTitle>비밀번호 찾기</StyledTitle>
          <StyledDescription>회원 가입 시에 입력하신 닉네임과 이메일을 입력하세요.</StyledDescription>
          <TextField 
            onChange={onChangeNickname}
            label="닉네임" 
            InputProps={{ sx: { borderRadius: 6 } }} 
          />
          <TextField 
            onChange={onChangeEmail}  
            label="이메일" 
            placeholder='@를 포함한 이메일 주소' 
            InputProps={{ sx: { borderRadius: 6 } }}
          />
          <Button 
            className='button' 
            onClick={onClickFindPasswordButton} 
            size="large" 
            variant="contained" 
            disabled={userNickname.length === 0 || userEmail.length === 0}>
              비밀번호 찾기
          </Button>
          <Result className={resultMessage==="" ? 'not_found' : 'found'}>
            {resultMessage}
          </Result>  
        </StyledWrapper>
      </InnerWrapper>
    </ParentWrapper>
  );
}
