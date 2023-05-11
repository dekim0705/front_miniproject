import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const StyledButton = styled(Button)`
  && {
    background-color: rgb(83,131,236);
    /* background-color: rgb(33,43,75); */
    color: white;
    width: 100px;
    font-weight: bold;
    font-size : 1rem;

  }
`;

const WriteButton = () => {
  return (
    <Link to="/write">
      <StyledButton variant="contained">글쓰기</StyledButton>
    </Link>
  );
}

export default WriteButton;
