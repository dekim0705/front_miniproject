import React from "react";
import styled from 'styled-components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from "react-router-dom";

const StyledAddCircleOutlineIcon = styled(AddCircleOutlineIcon)`
  color: #3B74EC;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 100px;
  &:hover {
    color: #1E2B4D;;
  }
`;
const WriteButton = () => {
  return (
    <div>
      <Link to="/write">
        <StyledAddCircleOutlineIcon sx={{ fontSize: "3rem" }} />
      </Link>
    </div>
  );
}

export default WriteButton;