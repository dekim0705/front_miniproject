import React from 'react';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  & > :not(style) {
    margin: 1;
  }
`;

const StyledTextarea = styled(TextareaAutosize)`
  width: 69.4%;
  resize: none;
  padding: 4px;
  font-size: 15px;
  line-height: 1.5;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.3);
  }
`;

const ContentInput = ({value, onChange}) => {
  return (
    <StyledBox component="form" noValidate autoComplete="off">
      <StyledTextarea
        placeholder="내용을 입력하세요"
        minRows={13}
        maxRows={16}
        value={value}
        onChange={onChange}
      />
    </StyledBox>
  );
};

export default ContentInput;
