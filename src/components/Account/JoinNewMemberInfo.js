import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountAxiosApi from "../../api/AccountAxiosApi";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Select} from "@mui/material";
import { ParentWrapper, InnerWrapper, ButtonWrapper, FlexColumnWrapper, FlexRowWrapper } from "./Wrappers";
import JoinButton from "./JoinButton";
import PopUp from "../../util/PopUp";
import styled from "styled-components";
import { MemberInfoContext } from "../../context/MemberInfo";
import { useContext } from "react";


const HintWrapper = styled.div`
  margin-left: 10px;
  font-size: 0.7rem;
  color:#999;
  .success {
    color: #3b74ec;
  }
  .error {
    color: red;
  }
`;

const NewMemberInfo = () => {
  const navigate = useNavigate();
  const { memberInfo, setMemberInfo } = useContext(MemberInfoContext);


  // 키보드 입력
  const [inputNickname, setInputNickname] = useState(memberInfo.nickname);
  const [inputPwd, setInputPwd] = useState(memberInfo.pwd);
  const [inputConPwd, setInputConPwd] = useState("");
  const [inputEmail, setInputEmail] = useState(memberInfo.email);
  
  const [emailDomain, setEmailDomain] = useState('@gmail.com');

  // 오류 메세지
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [pwdMessage, setPwdMessage] = useState ("");
  const [conPwdMessage, setConPwdMessage] = useState("");

  // 유효성 검사
  const [isNickname, setIsNickname] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isConPwd, setIsConPwd] = useState(false);

  // 닉네임 중복확인결과에 따른 비밀번호 인풋창 활성/비활성화
  const [inputPwdDisabled, setInputPwdDisabled] = useState(true);

  // 이메일 중복확인 결과에 따른 상태
  // const [isEmailAvailable, setIsEmailAvailable] = useState(false);
  // const [emailAvailabilityMessage, setEmailAvailabilityMessage] = useState("");


  // 닉네임
    // 🔑 닉네임 정규식 : 2 ~ 10자 한글, 영문, 숫자 사용 가능
  const onChangeNickname = (e) => {
    const nicknameRegex = /^(?=.*[a-zA-Z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
    const nicknameCurrent = e.target.value;
    setInputNickname(nicknameCurrent);
    if(!nicknameRegex.test(nicknameCurrent) || nicknameCurrent.length === 0) {
      setNicknameMessage("2~10자의 닉네임을 입력해주세요. (한글, 영문, 숫자 사용 가능)");
      setIsNickname(false);
      setInputPwd("");
      setInputPwdDisabled(true);
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
// 이메일 도메인
  const handleEmailDomainChange = (event) => {
    setEmailDomain(event.target.value);
  };

  // 팝업
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpText, setPopUpText] = useState("");
  const closePopUp = () => {
    setPopUpOpen(false);
  };

  // 닉네임 중복 확인
  const onClickNicknameDoubleCheck = async() => {
    console.log("Click -> 닉네임 중복확인");
    // 가입 여부 우선 확인
    const memberCheck = await AccountAxiosApi.memberRegCheck(inputNickname);
    console.log("닉네임 중복여부 확인: ", memberCheck.data);

    // 닉네임 중복 여부 확인 후 팝업 창 
    if(memberCheck.data === true) {
      setPopUpOpen(true);
      setPopUpText("🙆🏻‍♀️ 사용 가능한 닉네임 입니다.");
      setNicknameMessage('사용 가능한 닉네임 입니다.');
      setInputPwdDisabled(false);
    } else {
      setPopUpOpen(true);
      setPopUpText(`🙅🏻‍♀️ '${inputNickname}' 은(는) 이미 사용중인 닉네임 입니다.`);
      setInputNickname(''); // 인풋 창 초기화
      setInputPwdDisabled(true);
    }
  }

    // '이전' 버튼
    const handlePrevButtonClick = () => {
      navigate('/join');
    }
  
  // '다음' 버튼
  const handleNextButtonClick = async () => {
    if(inputNickname && inputPwd && inputConPwd && inputEmail) {
      console.log("Step3로 이동");

      setMemberInfo(prevState => ({
        ...prevState,
        nickname: inputNickname,
        pwd: inputConPwd,
        email: inputEmail + emailDomain
      }));
      console.log(memberInfo);
      // const emailCheck = await AccountAxiosApi.isMemberByEmail(memberInfo.email);
      // console.log("인풋된이메일?: ", memberInfo.email);
      // console.log("이메일 중복여부 확인: ", emailCheck.data);
  
      // if(emailCheck.data === false) {
      //   setPopUpOpen(true);
      //   setPopUpText(`🙅🏻‍♀️ '${memberInfo.email}' 은(는) 사용불가한 이메일 입니다.`);
      //   setInputPwdDisabled(false);
      // }

    navigate('/join/step3');

    } else {
      console.log("모든 필드 입력 요망")
      setPopUpOpen(true);
      setPopUpText("모든 필드를 입력!!!하세요!! 🥹")
    }
  };

  return(
    <ParentWrapper width="40">
      <InnerWrapper width="60" gap="30">

        {/* 닉네임 */}
        <FlexColumnWrapper>
          <FlexRowWrapper gap="10">
            <TextField 
              size="small"
              label="닉네임" 
              value={inputNickname} 
              onChange={onChangeNickname} 
              placeholder="닉네임을 입력하세요" 
              required 
              InputProps={{ sx: { borderRadius: 4 } }} 
            /> 
            {isNickname ? (
              <Button onClick={onClickNicknameDoubleCheck} variant="outlined" type="button" size="small" sx={{borderRadius: 4}}>
                중복확인
              </Button>
            ) : (
              <Button type="button" size="small" sx={{color: '#ffffff'}}>
                중복확인
              </Button>
            )}
          </FlexRowWrapper>
          <HintWrapper> 
            {inputNickname.length > 0 && <span className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</span>} 
          </HintWrapper>
        </FlexColumnWrapper>

        {/* 비밀번호 */}
        <FlexColumnWrapper gap="10">
          <div className="pwd_input">
            <TextField 
              size="small" 
              type="password"
              label="비밀번호"
              value={inputPwd}
              onChange={onChangePwd}
              placeholder="비밀번호를 입력하세요"
              required 
              disabled={inputPwdDisabled}
              InputProps={{ sx: { borderRadius: 4 } }} 
            />
            <HintWrapper> 
              {inputPwd.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>} 
            </HintWrapper>
          </div>
          <div className="con_pwd_input">
            <TextField 
              size="small"
              type="password" 
              label="비밀번호 확인" 
              value={inputConPwd} 
              onChange={onChangeConPwd} 
              placeholder="비밀번호를 다시 입력하세요" 
              required 
              InputProps={{ sx: { borderRadius: 4 } }} 
            />
            <HintWrapper> 
              {inputConPwd.length > 0 && <span className={`message ${isConPwd ? 'success' : 'error'}`}>{conPwdMessage}</span>} 
            </HintWrapper>
          </div>
        </FlexColumnWrapper>

        {/* 이메일 */}
        <FlexRowWrapper gap="2">
          <TextField 
            size="small" 
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
        </FlexRowWrapper>
      </InnerWrapper>

      {/* 버튼 */}
      <ButtonWrapper>
        <JoinButton onClick={handlePrevButtonClick}>이전</JoinButton>
        {inputNickname && inputPwd && inputConPwd && inputEmail ? (
          <JoinButton
            onClick={handleNextButtonClick}
            sx={{ 
              backgroundColor:"#3B74EC",
              color: "#E5E7EA",
              fontWeight: "bold",
              }}
          >
            다음
          </JoinButton>
        ) : (
          <JoinButton
            onClick={handleNextButtonClick}
            sx={{ 
              backgroundColor:"#E5E7EA",
              color: "#1E2B4D",
                "&:hover": { 
                  backgroundColor: "#E5E7EA",
                  // color: "#E5E7EA"
                  }
              }}
          >
            다음
          </JoinButton>
        )}
      </ButtonWrapper>

      {/* 모든 필드 입력요망 팝업 */}
      <PopUp open={PopUpOpen} close={closePopUp} header="❗️">{PopUpText}</PopUp>
    </ParentWrapper>
  );
}
export default NewMemberInfo;
