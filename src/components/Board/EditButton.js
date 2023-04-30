import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  margin-right : 130px;
  margin-bottom : 50px;
`;

const EditButton = () => {
  return (
    <Wrapper>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" sx={{ width: '80px' }}>수정</Button>
        <Button variant="contained" sx={{ width: '80px' }}>삭제</Button>
      </Stack>
    </Wrapper>
  );
};

export default EditButton;
