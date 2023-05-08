import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 20px;
  background-color: #C6DEF7;

  select {
    width: 30%;
  }
  button {
    height: 30px;
    border: 4px outset #eee;
    font-weight: bolder;
  }
`;

const StyledTextarea = styled.textarea`
  background-color: #4E5968;
  color: #fff;

  ::placeholder {
    color: #fff;
  }
`;

const CodeBlockInput = ({ selectLanguage, setSelectLanguage, codeBlockInput, setCodeBlockInput, handleSendCodeBlock }) => {
  return (
    <Container>
      <select
        value={selectLanguage}
        onChange={e => setSelectLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
      </select>
      <StyledTextarea
        rows={6}
        value={codeBlockInput}
        onChange={e => setCodeBlockInput(e.target.value)}
        placeholder="코드를 입력하세요."
      ></StyledTextarea>
      <button onClick={handleSendCodeBlock}>코드 전송</button>
    </Container>
  );
};

export default CodeBlockInput;