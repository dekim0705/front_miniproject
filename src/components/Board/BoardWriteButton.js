import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const StyledButton = styled(Button)`
  && {
    background-color:  rgb(40, 51, 90);
    color: white;
    width: 100px;
    font-weight: bold;
    font-size : 1rem;
    &:hover {
      background-color: rgb(24, 31, 54);
    }
  }
`;

const BoardWriteButton = () => {
  return (
    <Link to="/write">
      <StyledButton variant="contained">글쓰기</StyledButton>
    </Link>
  );
}

export default BoardWriteButton;
