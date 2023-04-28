import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import styled from "styled-components";


const Container = styled.div`
  .email_field {
    display: flex;
  }

`


const Join = () => {
  const navigate = useNavigate();

  // 키보드 입력
  const [inputNickname, setInputNickname] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const [inputConPwd, setInputConPwd] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  // 오류 메세지
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [pwdMessage, setPwdMessage] = useState ("");
  const [conPwdMessage, setConPwdMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  // 유효성 검사
  const [isNickname, setIsNickname] = useState(false);
  const [isPwd, setIsPwd] = useState(false);
  const [isConPwd, setIsConPwd] = useState(false);
  const [isEmail, setIsEmail] = useState(false);



  // 닉네임
    // 🔑 닉네임 정규식 : 2 ~ 10자 한글, 영문, 숫자 사용 가능
  const onChangeNickname = (e) => {
    const nicknameRegex = /^(?=.*[a-zA-Z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
    const nicknameCurrent = e.target.value;
    setInputNickname(nicknameCurrent);
    if(!nicknameRegex.test(nicknameCurrent)) {
      setNicknameMessage("2~10자의 닉네임을 입력해주세요. (한글, 영문, 숫자 사용 가능)");
      setIsNickname(false);
    } else {
      setNicknameMessage("형식 ㅇㅋ 중복확인 ㄱㄱ");
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
      setPwdMessage(`숫자+영문자+특스문자 조합으로 8자리 이상 입력해주세요.`)
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
    setIsEmail(true);
  }



  return(
    <Container>
      <div className="item2">
        <TextField
          className="input_field"
          // type="password"
          label="닉네임"
          value={inputNickname}
          onChange={onChangeNickname}
          placeholder="닉네임을 입력하세요"
          required
          InputProps={{ sx: { borderRadius: 5 } }}
      />
      </div>
      <div className="hint">
        {inputNickname.length > 0 && <span className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</span>}
      </div>

      <div className="item2">
        <TextField
          className="input_field"
          // type="password"
          label="비밀번호"
          value={inputPwd}
          onChange={onChangePwd}
          placeholder="비밀번호를 입력하세요"
          required
          InputProps={{ sx: { borderRadius: 5 } }}
      />
      </div>
      <div className="hint">
        {inputPwd.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>}
      </div>

      <div className="item2">
        <TextField
          className="input_field"
          // type="password"
          label="비밀번호 확인"
          value={inputConPwd}
          onChange={onChangeConPwd}
          placeholder="비밀번호를 다시입력하세요"
          required
          InputProps={{ sx: { borderRadius: 5 } }}
      />
      </div>
      <div className="hint">
        {inputConPwd.length > 0 && <span className={`message ${isConPwd ? 'success' : 'error'}`}>{conPwdMessage}</span>}
      </div>
      
      <div className="email_field">
        <div className="item2">
          <TextField
            className="input_field"
            // type="password"
            label="이메일주소"
            value={inputEmail}
            onChange={onChangeEmail}
            placeholder="이메일주소를 입력하세요"
            required
            InputProps={{ sx: { borderRadius: 5 } }}
        />
        </div>
        <div>
          <p>@</p>
        </div>
        <div className="item2">
        <TextField
            className="input_field"
            value={inputEmail}
            onChange={onChangeEmail}
            required
            InputProps={{ sx: { borderRadius: 5 } }}
        />
        </div>
        <Select defaultValue="주소 선택">
          <Option value="gmail.com">gmail.com</Option>
          <Option value="naver.com">naver.com</Option>
          <Option value="kakao.com">kakao.com</Option>
          <Option value="nate.com">nate.com</Option>
        </Select>
      </div>
    </Container>
  );
}
export default Join;
