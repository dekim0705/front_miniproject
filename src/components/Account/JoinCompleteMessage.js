import React, { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import JoinButton from "./JoinButton";
import { ParentWrapper, InnerWrapper, FlexRowWrapper } from "./Wrappers";
import { TextField, Button } from "@mui/material";
import { MemberInfoContext } from "../../context/MemberInfo";
import { useContext } from "react";
import AccountAxiosApi from "../../api/AccountAxiosApi";
import AccountPopUp from '../../util/AccountPopUp';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom';



const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Text = styled.p`
  margin: 0;
`;

const RequestEmail = styled.div`
  text-align: center;
  cursor: pointer;
  /* text-decoration: underline; */
  font-size: 0.9rem; 
`;

const PrevButtonWrapper = styled.div`
  display: flex;
  align-self: flex-start;
`;

const PopUpMessage = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
`;

const CompleteMessage = () => {
  const navigate = useNavigate();
  const { memberInfo } = useContext(MemberInfoContext);
  const [inputAuthKey, setInputAuthKey] = useState('');
  const [showPopup, setShowPopup] = useState(false); // 팝업 
  const [showLoginPopup, setShowLoginPopup] = useState(false); // 팝업 
  const [popUpMessage, setPopUpMessage] = useState("");

  // 사용자 이메일 inbox로 이동
  const handleEmailVerification = () => {
    const domain = memberInfo.email.split('@')[1];
    let emailLink = '';
    switch (domain) {
      case 'gmail.com':
        emailLink = `https://mail.google.com/mail/u/${memberInfo.email}`;
        break;
      case 'naver.com':
        emailLink = `https://mail.naver.com/?n=12345678#list/INBOX`;
        break;
      case 'kakao.com':
        emailLink = `https://mail.kakao.com`;
        break;
      // 도메인 추가하기
      default:
        // 기본
        emailLink = `mailto:${memberInfo.email}`;
        break;
    }
    window.open(emailLink, '_blank'); // 새창으로 열기
  }

  const onChangeInputAuthKey = (e) => {
    setInputAuthKey(e.target.value);
    console.log(inputAuthKey);
  }


  const handleEmailAuthClick = async() => {
    console.log(memberInfo.email, inputAuthKey);
    try{
      const response = await AccountAxiosApi.isMemberEmailAuth(memberInfo.email, inputAuthKey);
      console.log(response.status);
      setShowLoginPopup(true);
      setPopUpMessage('💌 이메일 인증이 완료되었습니다!');
    } catch(error) {
      if (error.response.status === 404) {
        setShowPopup(true);
        setPopUpMessage('인증번호를 확인해 주세요. 😢');
      } 
    }
  };

  const handlePrevButtonClick = () => {
    navigate('/join/step3');
  }
  const handleLoginButtonClick = () => {
    navigate('/login');
  }

  return(
    <ParentWrapper width="40" margin="0">
      <InnerWrapper width="70" gap="30">
        <Content>
          <Title>입력하신 이메일 주소로 <br /><b>인증번호</b>가 발송되었습니다.</Title>
          <Text>회원가입 완료를 위해 <br /><b>인증번호 6자리</b>를 입력해 주세요.</Text>
          <FlexRowWrapper>
              <Text><span style={{color:'#3B74EC'}}><i><b>{memberInfo.email}</b></i></span></Text> 
              <MoveToInboxIcon onClick={handleEmailVerification} sx={{width:'3rem', cursor: 'pointer', color:'#3B74EC'}} />
          </FlexRowWrapper>
        </Content>
        <Content>
          <FlexRowWrapper gap="10">
            <TextField 
              value={inputAuthKey} 
              onChange={onChangeInputAuthKey}
              placeholder='인증번호 6자리'
              size='small'
              InputProps={{ sx: { borderRadius: 4 } }} 
            />
            <Button 
              onClick={handleEmailAuthClick}
              variant='contained'
              sx={{borderRadius: '30px'}}
            >
              확인
            </Button>
          </FlexRowWrapper>
        </Content>
        <RequestEmail>
          <Content>이메일을 받지 못하셨다면 <br />고객센터로 문의해 주세요.</Content>
        </RequestEmail >
      </InnerWrapper>
      <PrevButtonWrapper>
        <JoinButton onClick={handlePrevButtonClick}>
          이전
        </JoinButton>
      </PrevButtonWrapper>
      <AccountPopUp open={showPopup} close={() => setShowPopup(false)} header="❗️" closeText="확인">
        <PopUpMessage>{popUpMessage}</PopUpMessage>
      </AccountPopUp>
      <AccountPopUp open={showLoginPopup}  close={handleLoginButtonClick} header="❗️" closeText="로그인">
        <PopUpMessage>{popUpMessage}</PopUpMessage>
      </AccountPopUp>
    </ParentWrapper>
  );

}
export default CompleteMessage;