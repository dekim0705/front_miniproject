import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import LogoBigger from "./LogoBigger";

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
    position: fixed;
    left: 290px;
    top: 490px;
}
.login_button {
    width: 300px;
    border-radius: 20px;
    background-color: #3b74ec;
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
}
`;

const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordReg =
/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

const Login = () => {
const [formInput, setFormInput] = useState({
    email: "",
    password: "",
});
const isValidLogin = !(
    emailReg.test(formInput.email) && passwordReg.test(formInput.password)
);

const handleLoginInput = (e) => {
    const { value, name } = e.target;
    setFormInput({ ...formInput, [name]: value });
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
    noValidate autoComplete="off">
        <TextField 
        className="input_field" 
        name="email" 
        onChange={handleLoginInput} 
        value={formInput.email} 
        type="text" 
        label="이메일주소" 
        placeholder="@를 포함한 이메일주소 입력" 
        InputProps={{ sx: { borderRadius: 10 } }}/>
        <TextField 
        className="input_field" 
        name="password" 
        onChange={handleLoginInput} 
        value={formInput.password} 
        type="password" 
        label="비밀번호" 
        placeholder="비밀번호 입력" 
        InputProps={{ sx: { borderRadius: 10 } }}/>
    <div className="find_account">
        <Link to="/findaccount">
            <p>계정 찾기</p>
        </Link>
    </div>
    <Button className="login_button" disabled={isValidLogin} type="button" variant="contained" size="large">로 그 인</Button>
    <div className="join">
    <p>계정이 없으신가요? </p>
    <Link to="/join">
        <p>회원가입</p>
    </Link>
    </div>
    </Box>
    </StyledLoginField>);
};

export default Login;
