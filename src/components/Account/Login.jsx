import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import AccountAxiosApi from "../../api/AccountAxiosApi";
import LogoBigger from "../LogoBigger";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PopUp from "../../util/PopUp";

const StyledLoginField = styled.div`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0 auto;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
  a {
    color: #3b74ec;
  }
  a:hover {
    font-weight: bold;
  }
  .welcome_message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 30px auto;
  }
  .welcome_message h1 {
    color: #191f28;
    font-size: 2rem;
    margin-top: -20px;
  }
  .welcome_message p {
    color: #4e5968;
    margin-top: -20px;
  }
  .input_container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  .input_field {
    width: 400px;
    border-radius: 10px;
  }
  .find_account {
    font-size: 0.9rem;
    position: relative;
    left: 140px;
    top: -40px;
  }
  .disable_button {
    width: 300px;
    border-radius: 20px;
    background-color: #eee;
  }
  .enable_button {
    width: 300px;
    border-radius: 20px;
    background-color: #3b74ec;
  }
  .disable_button {
    width: 300px;
    border-radius: 20px;
    background-color: #eee;
  }
  .join {
    display: flex;
    font-size: 0.9rem;
    margin-top: -50px;
  }
  @media screen and (max-width: 768px) {
    .input_field {
      width: 95%;
    }
    .find_account {
      font-size: 0.9rem;
      position: fixed;
      left: 290px;
      top: 490px;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();

  // 키보드 입력 받기
  const [inputEmail, setInputEmail] = useState("");
  const [inputPwd, setInputPwd] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPwd, setIsPwd] = useState(false);

  // 로그인 실패시 팝업창
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const closePopUp = () => {
    setPopUpOpen(false);
  };

  const onClickLogin = async () => {
    try {
    const response = await AccountAxiosApi.loginMember(inputEmail, inputPwd);
    if (response.data === true) {
      navigate("/");
    } else {
      console.log("로그인 에러");
      setPopUpOpen(true);
    }
  } catch (error) {
    console.error("요청은 했으나.. 오류 발생 😰", error);
    setPopUpOpen(true);
  }
};

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    setIsEmail(true);
  };

  const onChangePwd = (e) => {
    setInputPwd(e.target.value);
    setIsPwd(true);
  };

  return (
    <StyledLoginField>
      <div className="welcome_message">
        <LogoBigger />
        <h1>개발러스에 오신것을 환영합니다!</h1>
        <p>개발러스는 개발자들을 위한 정보공유 커뮤니티 입니다.</p>
      </div>
      <Box
        className="input_container"
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          className="input_field"
          name="email"
          type="text"
          label="이메일주소"
          value={inputEmail}
          onChange={onChangeEmail}
          placeholder="@를 포함한 이메일주소 입력"
          InputProps={{ sx: { borderRadius: 10 } }}
        />
        <TextField
          className="input_field"
          name="password"
          type="password"
          label="비밀번호"
          value={inputPwd}
          onChange={onChangePwd}
          placeholder="비밀번호 입력"
          InputProps={{ sx: { borderRadius: 10 } }}
        />
        <div className="find_account">
          <Link to="/findaccount">
            <p>계정 찾기</p>
          </Link>
        </div>
        <div>
          {isEmail && isPwd ? (
            <Button
              className="enable_button"
              type="button"
              onClick={onClickLogin}
              variant="contained"
              size="large"
            >
              로 그 인
            </Button>
          ) : (
            <Button
              className="disable_button"
              type="button"
              onClick={onClickLogin}
              variant="contained"
              size="large"
            >
              로 그 인
            </Button>
          )}
        </div>
        <PopUp open={PopUpOpen} close={closePopUp} type={false} header="오류">
          이메일과 비밀번호를 다시 확인해주세요. 🥹
        </PopUp>
        <div className="join">
          <p>계정이 없으신가요? </p>
          <Link to="/join">
            <p>회원가입</p>
          </Link>
        </div>
      </Box>
    </StyledLoginField>
  );
};

export default Login;
