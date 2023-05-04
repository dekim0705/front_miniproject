import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountAxiosApi from '../../api/AccountAxiosApi';
import { InnerWrapper, ParentWrapper } from './Wrappers';
import PopUp from '../../util/PopUp';

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

const HintWrapper = styled.div`
  margin-top: -15px;
  font-size: 0.7rem;
  color:#999;
  .success {
    color: #3b74ec;
  }
  .error {
    color: red;
  }
`;

export const ResetPassword = () => {

  // 사용자 입력
  const [inputNewPwd, setInputNewPwd] = useState("");  
  const [inputConNewPwd, setInputConNewPwd] = useState("");  

  // 오류 메세지
  const [newPwdMessage, setNewPwdMessage] = useState("");
  const [conNewPwdMessage, setConNewPwdMessage] = useState("");

  // 유효성 검사
  const [isNewPwd, setIsNewPwd] = useState(false);
  const [isConNewPwd, setIsConNewPwd] = useState(false);

   // 비밀번호
    // 🔑 비밀번호 정규식 : 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
    const onChangeNewPwd = (e) => {
      const pwdRegex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
      const pwdCurrent = e.target.value;
      setInputNewPwd(pwdCurrent);
      if(!pwdRegex.test(pwdCurrent)) {
        setNewPwdMessage(`숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.`)
        setIsNewPwd(false);
      } else {
        setNewPwdMessage("올바른 형식 입니다.");
        setIsNewPwd(true);
      }
    }

      // 비밀번호 확인
  const onChangeConNewPwd = (e) => {
    const conPwdCurrent = e.target.value;
    setInputConNewPwd(conPwdCurrent)
    if (conPwdCurrent !== inputNewPwd) {
      setConNewPwdMessage('비밀번호가 일치하지 않습니다.')
      setIsConNewPwd(false)
    } else {
      setConNewPwdMessage('비밀번호가 일치 합니다.')
      setIsConNewPwd(true);
    }
  }

  const onClickChangePwdButton = async() => {
    // const response = await AccountAxiosApi.getMemberEmail(userNickname);
    if ( isNewPwd && isConNewPwd) {
      setPopUpOpen(true);
      setPopUpText(`🙆🏻‍♀️ 유효성도 통과!?`);
      console.log(`🙆🏻‍♀️ 유효성도 통과?! `);
      // console.log(`🙆🏻‍♀️비밀번호 변경 완료`);
    } else {
      setPopUpOpen(true);
      setPopUpText(`🙅🏻‍♀️뭔가 잘못됐으셔!! 아마 정규식?`);
      console.log(`🙅🏻‍♀️뭔가 잘못됐으셔!!`);
    };
  };

   // 팝업
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpText, setPopUpText] = useState("");

  const closePopUp = () => {
    setPopUpOpen(false);
  };

  return (
    <ParentWrapper width="50">
      <InnerWrapper width="75">
        <StyledWrapper>
          <StyledTitle>비밀번호 변경</StyledTitle>
          <StyledDescription>변경하실 비밀번호를 입력하세요.</StyledDescription>
          <TextField 
              type="password"
              label="비밀번호"
              value={inputNewPwd}
              onChange={onChangeNewPwd}
              placeholder="비밀번호를 입력하세요"
              required 
              InputProps={{ sx: { borderRadius: 4 } }} 
            />
            <HintWrapper> 
              {inputNewPwd.length > 0 && <span className={`message ${isNewPwd ? 'success' : 'error'}`}>{newPwdMessage}</span>} 
            </HintWrapper>
            <TextField 
              type="password" 
              label="비밀번호 확인" 
              value={inputConNewPwd} 
              onChange={onChangeConNewPwd} 
              placeholder="비밀번호를 다시 입력하세요" 
              required 
              InputProps={{ sx: { borderRadius: 4 } }} 
            />
            <HintWrapper> 
              {inputConNewPwd.length > 0 && <span className={`message ${isConNewPwd ? 'success' : 'error'}`}>{conNewPwdMessage}</span>} 
            </HintWrapper>

          <Button 
            className='button' 
            onClick={onClickChangePwdButton} 
            size="large" 
            variant="contained" 
            disabled={!isNewPwd || !isConNewPwd}>
              비밀번호 변경
          </Button>
        </StyledWrapper>
      </InnerWrapper>
      <PopUp open={PopUpOpen} close={closePopUp} header="❗️">{PopUpText}</PopUp>
    </ParentWrapper>
  );
};
export default ResetPassword;