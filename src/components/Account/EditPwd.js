import React, { useState } from "react";
import AccountAxiosApi from "../../api/AccountAxiosApi";
import { InfoSectionContainer, HintWrapper  } from "./MemberEditInformation";
import { FlexColumnWrapper } from "./Wrappers";
import AccountPopUp from "../../util/AccountPopUp";
import { TextField, Button } from "@mui/material";

const EditPwd = ({ userMemberNum, setUpdateCounter, currentMemberInfo }) => {
  const [password, setPassword] = useState(currentMemberInfo[0]?.pwd || '');
  const [conPassword, setConPassword]  = useState('');  
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpText, setPopUpText] = useState("");
  const [pwdMessage, setPwdMessage] = useState ("");
  const [conPwdMessage, setConPwdMessage] = useState("");    
  const [isPwd, setIsPwd] = useState(false);
  const [isConPwd, setIsConPwd] = useState(false);


   // 비밀번호 변경
    // 🔑 비밀번호 정규식 : 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
    const onChangePwd = (e) => {
      const pwdRegex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
      const pwdCurrent = e.target.value;
      setPassword(pwdCurrent);
      if(!pwdRegex.test(pwdCurrent)) {
        setPwdMessage(`숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.`);
        setIsPwd(false);
      } else {
        setPwdMessage("올바른 형식 입니다.");
        setIsPwd(true);
      }
    }
  
    // 비밀번호 확인
    const onChangeConPwd = (e) => {
      const conPwdCurrent = e.target.value;
      setConPassword(conPwdCurrent)
      if (conPwdCurrent !== password) {
        setConPwdMessage('비밀번호가 일치하지 않습니다.')
        setIsConPwd(false)
      } else {
        setConPwdMessage('비밀번호가 일치 합니다.')
        setIsConPwd(true);
      }
    }

      // 닉네임 변경 버튼 클릭
    const editMemberPwd  = async() => {
      if (!isPwd || !isConPwd) {
        setPopUpText('비밀번호를 확인해 주세요. 😢')
        setPopUpOpen(true);
        return;
      }
      try {
        const memberNum = userMemberNum;
        const memberPwd = password;
        await AccountAxiosApi.editMemberPwd(memberPwd, memberNum);
        setUpdateCounter((prevCounter) => prevCounter + 1); 
        setPopUpText('비밀번호가 변경 되었습니다. 😊')
        setPopUpOpen(true);

      } catch (error) {
        console.error('비밀번호 변경 실패..');
  
      }
    }

  return(
    <InfoSectionContainer>
      <FlexColumnWrapper gap="15">
        <div className="pwd_input">
          <TextField 
            size="small" 
            type="password"
            label="비밀번호"
            value={password}
            onChange={onChangePwd}
            placeholder="비밀번호를 입력하세요"
            required 
            // disabled={inputPwdDisabled}
            InputProps={{ sx: { borderRadius: 4 } }} 
          />
          <HintWrapper> 
            {password.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>} 
          </HintWrapper>
        </div>
        <div className="con_pwd_input">
          <TextField 
            size="small"
            type="password" 
            label="비밀번호 확인" 
            value={conPassword} 
            onChange={onChangeConPwd} 
            placeholder="비밀번호를 다시 입력하세요" 
            required 
            InputProps={{ sx: { borderRadius: 4 } }} 
          />
          <HintWrapper> 
            {conPassword.length > 0 && <span className={`message ${isConPwd ? 'success' : 'error'}`}>{conPwdMessage}</span>} 
          </HintWrapper>
        </div>
      </FlexColumnWrapper>
      <Button onClick={editMemberPwd} variant="contained" sx={{borderRadius:20, fontWeight:"bold", alignSelf:"flex-end", marginRight: 4}}>비밀번호 변경</Button>
      <AccountPopUp open={PopUpOpen} close={() => setPopUpOpen(false)} header="❗️" closeText="확인">{PopUpText}</AccountPopUp>

    </InfoSectionContainer>
  );
}
export default EditPwd;