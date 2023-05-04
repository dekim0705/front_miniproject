import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  margin-right : 210px;
  margin-bottom : 50px;
`;

const EditButton = () => {
  return (
    <Wrapper>
      <Stack spacing={3} direction="row">
        <Button variant="outlined" sx={{ width: '80px' }}> <Link to="/edit">수정</Link></Button>
        <Button variant="contained" sx={{ width: '80px' }}>삭제</Button>
      </Stack>
    </Wrapper>
  );
};

export default EditButton;
