import React, { useState, useContext } from "react";
import AccountAxiosApi from "../../api/AccountAxiosApi";
import { InfoSectionContainer, HintWrapper  } from "./MemberEditInformation";
import { FlexRowWrapper } from "./Wrappers";
import AccountPopUp from "../../util/AccountPopUp";
import { TextField, Button } from "@mui/material";


const EditNickname = ({ userMemberNum, setUpdateCounter, currentMemberInfo }) => {
  const [nickname, setNickname] = useState(currentMemberInfo[0].nickname);
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpText, setPopUpText] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [isNickname, setIsNickname] = useState(false);

    // 닉네임 변경
    const onChangeNickname = (e) => {
      const nicknameRegex = /^(?=.*[a-zA-Z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
      const nicknameCurrent = e.target.value;
      setNickname(nicknameCurrent);
      if(!nicknameRegex.test(nicknameCurrent) || nicknameCurrent.length === 0) {
        setNicknameMessage("2~10자의 닉네임을 입력해 주세요. (한글, 영문, 숫자 사용 가능)");
      } else {
        setNicknameMessage("닉네임 중복 확인을 해주세요.");
      }
    }

    // 닉네임 중복 확인
    const onClickNicknameDoubleCheck = async() => {
    if (nickname === "") {
      setPopUpOpen(true);
      setPopUpText(`변경하실 닉네임을 입력해 주세요. 😢`);
      return;
    }
      const memberCheck = await AccountAxiosApi.memberRegCheck(nickname);
      console.log("닉네임 중복 여부 확인: ", memberCheck.data);
  
      if(memberCheck.data === true ) {
        setPopUpOpen(true);
        setPopUpText("사용 가능한 닉네임입니다. 😊");
        setNicknameMessage('사용 가능한 닉네임 입니다.');
        setIsNickname(true);
      } else {
        setPopUpOpen(true);
        setPopUpText(`'${nickname}' 은(는) 이미 사용중인 닉네임 입니다. 😢`);
        setNickname(''); // 인풋 창 초기화
      }
    }

    // 닉네임 변경 버튼 클릭
    const handleClickEditMemberNickname  = async() => {
      if (!isNickname || !nickname || currentMemberInfo.find((currentInfo) => currentInfo.nickname === nickname)) {
        setPopUpText('변경하실 닉네임을 확인해 주세요. 😢')
        setPopUpOpen(true);
        return;
      }
      try {
        const memberNum = userMemberNum;
        const memberNickname = nickname;
        await AccountAxiosApi.editMemberNickname(memberNickname, memberNum);
        setUpdateCounter((prevCounter) => prevCounter + 1); 
        setPopUpText('닉네임이 변경 되었습니다. 😊')
        setPopUpOpen(true);
        setNickname(memberNickname);
        setIsNickname(false);

      } catch (error) {
        console.error('닉네임 변경 실패..');
  
      }
    }
  return(
    <InfoSectionContainer>
      <FlexRowWrapper gap="10">
        <TextField 
          size="small" 
          label="닉네임" 
          value={nickname} 
          onChange={onChangeNickname} 
          placeholder="닉네임을 입력하세요" 
          InputProps={{ sx: { borderRadius: 4 } }} 
        /> 
          {currentMemberInfo.find((currentInfo) => currentInfo.nickname === nickname) ? (
            <Button type="button" size="small" sx={{color: '#ffffff', display: 'none'}}>
              중복확인
            </Button>
          ) : (
            <Button onClick={onClickNicknameDoubleCheck} variant="outlined" type="button" size="small" sx={{borderRadius: 4}}>
              중복확인
            </Button>
          )}
      </FlexRowWrapper>
      <HintWrapper> 
      {nickname.length > 0 && !currentMemberInfo.find((currentInfo) => currentInfo.nickname === nickname) && (
      <span className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</span>
      )}        
      </HintWrapper>
      <Button 
        onClick={handleClickEditMemberNickname} 
        variant="contained" 
        sx={{borderRadius:20, fontWeight:"bold", alignSelf:"flex-end", marginRight: 4 }}
      >닉네임 변경</Button>
      <AccountPopUp open={PopUpOpen} close={() => setPopUpOpen(false)} header="❗️" closeText="확인">{PopUpText}</AccountPopUp>
      </InfoSectionContainer>
  );
}
export default EditNickname;