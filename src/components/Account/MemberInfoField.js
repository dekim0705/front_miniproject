import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import AccountAxiosApi from "../../api/AccountAxiosApi";
import { Button, MenuItem, Select} from "@mui/material";
import PopUp from "../../util/PopUp";



const ParentWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    width: 80%;
  }
  .input_container {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
    width: 100%;
  }
  }
  .hint {
    margin-left: 10px;
    font-size: 0.7rem;
    color: #999;
  }
  .success {
    color: #3b74ec;
  }
  .error {
    color: red;
  }
  .nickname_enable_button {
    border-radius: 12px;
    height: 40px;
    align-self: center;
    color: #3b74ec;
  }
  .nickname_disable_button {
    border-radius: 12px;
    height: 40px;
    align-self: center;
    color: #ffffff;
  }
  .nickname_input {
    display: flex;
    flex-direction: column;
  }
  .nickname_button {
    display: flex;
    gap: 10px; 
  }
  .pwd_input_all {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .email_input {
    display: flex;
    gap: 5px;
  }
  .prev_button {
    border-radius: 20px;
    background-color: #eee;
    color: black;
  }
  .disable_button {
    border-radius: 20px;
    background-color: #eee;
  }
  .enable_button {
    border-radius: 20px;
    background-color: #3b74ec;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const MemberInfoField = () => {

  // 키보드 입력
  const [inputNickname, setInputNickname] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const [inputConPwd, setInputConPwd] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [emailDomain, setEmailDomain] = useState('@gmail.com');

  // 오류 메세지
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [pwdMessage, setPwdMessage] = useState ("");
  const [conPwdMessage, setConPwdMessage] = useState("");

  // 유효성 검사
  const [isNickname, setIsNickname] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isConPwd, setIsConPwd] = useState(false);

  // 닉네임
    // 🔑 닉네임 정규식 : 2 ~ 10자 한글, 영문, 숫자 사용 가능
  const onChangeNickname = (e) => {
    const nicknameRegex = /^(?=.*[a-zA-Z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
    const nicknameCurrent = e.target.value;
    setInputNickname(nicknameCurrent);
    if(!nicknameRegex.test(nicknameCurrent) || nicknameCurrent > 0) {
      setNicknameMessage("2~10자의 닉네임을 입력해주세요. (한글, 영문, 숫자 사용 가능)");
      setIsNickname(false);
    } else {
      setNicknameMessage("닉네임 중복확인을 해주세요.");
      setIsNickname(true);
    }
  }

  // 비밀번호
    // 🔑 비밀번호 정규식 : 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
  const onChangePwd = (e) => {
    const pwdRegex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    const pwdCurrent = e.target.value;
    setInputPwd(pwdCurrent);
    if(!pwdRegex.test(pwdCurrent)) {
      setPwdMessage(`숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.`)
      setIsPwd(false);
    } else {
      setPwdMessage("올바른 형식 입니다.");
      setIsPwd(true);
    }
  }

  // 비밀번호 확인
  const onChangeConPwd = (e) => {
    const conPwdCurrent = e.target.value;
    setInputConPwd(conPwdCurrent)
    if (conPwdCurrent !== inputPwd) {
      setConPwdMessage('비밀번호가 일치하지 않습니다.')
      setIsConPwd(false)
    } else {
      setConPwdMessage('비밀번호가 일치 합니다.')
      setIsConPwd(true);
    }
  }

  // 이메일 
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  }

  const handleEmailDomainChange = (event) => {
    setEmailDomain(event.target.value);
  };

  // 팝업
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpText, setPopUpText] = useState("");
  const closePopUp = () => {
    setPopUpOpen(false);
  };

  const onClickNicknameDoubleCheck = async() => {
    console.log("Click -> 닉네임 중복확인");
    // 가입 여부 우선 확인
    const memberCheck = await AccountAxiosApi.memberRegCheck(inputNickname);
    console.log("닉네임 중복여부 확인: ", memberCheck.data);

    // 닉네임 중복 여부 확인 후 팝업 창 
    if(memberCheck.data === true) {
      setPopUpOpen(true);
      setPopUpText("🙆🏻‍♀️ 사용 가능한 닉네임 입니다.");
    } else {
      setPopUpOpen(true);
      setPopUpText(`🙅🏻‍♀️ '${inputNickname}' 은(는) 이미 사용중인 닉네임 입니다.`);
      setInputNickname(''); // 인풋 창 초기화
    }
  }
  
  // '다음' 버튼 (모든 필드가 입력되어 있지 않으면 disable)
  const handleButtonClick = () => {
    if(inputNickname && inputPwd && inputConPwd && inputEmail) {
      console.log("Step3로 이동");
      console.log('Nickname:', inputNickname);
      console.log('Password:', inputConPwd);
      console.log('Email:', inputEmail + emailDomain);
    } else {
      console.log("모든 필드 입력 요망")
      setPopUpOpen(true);
      setPopUpText("모든 필드를 입력!!!하세요!! 🥹")
    }
  };



  return(
    <ParentWrapper>
      <div className="input_container">
        <div className="nickname_input">
          <div className="nickname_button">
            <TextField 
              size="small"
              className="input_field" 
              label="닉네임" 
              value={inputNickname} 
              onChange={onChangeNickname} 
              placeholder="닉네임을 입력하세요" 
              required 
              InputProps={{ sx: { borderRadius: 4 } }} 
            /> 
            {isNickname ? (
              <Button className="nickname_enable_button" type="button" onClick={onClickNicknameDoubleCheck} variant="outlined" size="small">
                중복확인
              </Button>
              ) : (
              <Button className="nickname_disable_button" type="button" size="small">
                중복확인
              </Button>
            )}
          </div>
          <div className="hint"> 
            {inputNickname.length > 0 && <span className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</span>} 
          </div>
        </div>
        <div className="pwd_input_all">
          <div className="pwd_input">
            <TextField 
              size="small" 
              className="input_field"
              type="password"
              label="비밀번호"
              value={inputPwd}
              onChange={onChangePwd}
              placeholder="비밀번호를 입력하세요"
              required 
              InputProps={{ sx: { borderRadius: 4 } }} 
            />
            <div className="hint"> 
              {inputPwd.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>} 
            </div>
          </div>
          <div className="conPwd_input">
            <TextField 
              size="small"
              className="input_field" 
              type="password" 
              label="비밀번호 확인" 
              value={inputConPwd} 
              onChange={onChangeConPwd} 
              placeholder="비밀번호를 다시입력하세요" 
              required 
              InputProps={{ sx: { borderRadius: 4 } }} 
            />
            <div className="hint"> 
              {inputConPwd.length > 0 && <span className={`message ${isConPwd ? 'success' : 'error'}`}>{conPwdMessage}</span>} 
            </div>
          </div>
        </div>
        <div className="email_input">
          <TextField 
            size="small" 
            className="input_field" 
            label="이메일주소" 
            value={inputEmail} 
            onChange={onChangeEmail} 
            placeholder="이메일주소를 입력하세요" 
            required 
            InputProps={{ sx: { borderRadius: 4 } }} 
          />
          <Select
            size="small"
            onChange={handleEmailDomainChange}
            variant="outlined"
            sx={{ borderRadius: 4 }}
            defaultValue='@gmail.com'>
              <MenuItem sx={{ borderRadius: 4 }} value="@gmail.com">@gmail.com</MenuItem>
              <MenuItem sx={{ borderRadius: 4 }} value="@kakao.com">@kakao.com</MenuItem>
              <MenuItem sx={{ borderRadius: 4 }} value="@naver.com">@naver.com</MenuItem>
              <MenuItem sx={{ borderRadius: 4 }} value="@nate.com">@nate.com</MenuItem>
          </Select>
        </div>
      </div>
      <ButtonWrapper>
        <Button
        className="prev_button"
        type="button"
        onClick={handleButtonClick}
        variant="contained"
        size="large"
      >
        이전
      </Button>
        {inputNickname && inputPwd && inputConPwd && inputEmail ? (
          <Button
            className="enable_button"
            type="button"
            onClick={handleButtonClick}
            variant="contained"
            size="large"
          >
            다음
          </Button>
        ) : (
          <Button
            className="disable_button"
            type="button"
            onClick={handleButtonClick}
            variant="contained"
            size="large"
          >
            다음
          </Button>
        )}
      </ButtonWrapper>   
      <PopUp open={PopUpOpen} close={closePopUp} header="❗️"> 
        {PopUpText}
      </PopUp> 
    </ParentWrapper>
    
  );
}
export default MemberInfoField;
