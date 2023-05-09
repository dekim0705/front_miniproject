import React, { useContext } from "react";
import styled from 'styled-components';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserInfo";
import { getPath } from '../../util/getPath';
import useCheckUserMatched from "../../util/useCheckUserMatched";

const StyledQuestionAnswerIcon = styled(QuestionAnswerIcon)`
  color: #3B74EC;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 40px;
  &:hover {
    color: #1E2B4D;
  }
`;
const MentorButton = () => {
  const { userNum, isLogin } = useContext(UserContext);
  const isMatched = useCheckUserMatched(userNum);
  const mentorPath = getPath("/mentor", isMatched);

  return (
    <div>
      <Link to={isLogin ? mentorPath : "/login"}>
        <StyledQuestionAnswerIcon sx={{ fontSize: "3rem" }} />
      </Link>
    </div>
  );
}

export default MentorButton;