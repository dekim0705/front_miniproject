import React, { useContext } from "react";
import styled from 'styled-components';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserInfo";

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
  const { userNum, matchNum } = useContext(UserContext);
  const mentorPath = matchNum.includes(userNum) ? '/chat' : '/mentor';

  return (
    <div>
      <Link to={mentorPath}>
        <StyledQuestionAnswerIcon sx={{ fontSize: "3rem" }} />
      </Link>
    </div>
  );
}

export default MentorButton;