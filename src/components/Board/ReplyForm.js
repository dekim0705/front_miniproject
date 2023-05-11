import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { UserContext } from '../../context/UserInfo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditPopUp from '../../util/EditPopUp';
import AlarmAxiosApi from '../../api/AlarmAxiosApi';


const CommentFormWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  margin-bottom : 50px;
  border-radius : 20px;
  padding: 25px;
  border: 1px solid #ccc;
  /* box-shadow: 1px 1px 3px 1px #C6DEF7; */
`;

const CommentFormAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 400px) {
    display :none;
  }
`;

const CommentFormButton = styled.button`
  background-color: rgb(73,115,228);
  /* background-color: rgb(33,43,75); */
  color: white;
  margin-left : 10px;
  padding: 12px 20px;
  border-radius: 20px;
  font-size: 15px;
  border : none;
  cursor: pointer;
  display: flex;
  justify-content : center;
  align-items: center;
  height : 70px;
  text-align : center;
  width : 80px;
  &:hover {
    background-color: rgb(53, 85, 168);
  }
  @media (max-width: 400px) {
    width: 50px;
    padding : 5px;
  }

`;
const CommentFormTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    height: 40px;
  }
  & .MuiOutlinedInput-root {
    border-radius: 20px;
  }
`;


const ReplyForm = ({ postNum, fetchReply }) => {
  const context = useContext(UserContext);
  const { userEmail, userPwd, userPfImgUrl } = context;
  const navigate = useNavigate();
  const [replyContent, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleReplyChange = (event) => {
    setContent(event.target.value);
  };

  const handleClick = () => {
    if (!userEmail || !userPwd) {
      alert('댓글을 작성하려면 로그인이 필요합니다.');
      navigate('/login', { replace: true });
    }
  };

  const handleReplySubmit = async () => {
    if (!replyContent) {
      alert('댓글 내용을 입력해주세요.');
      return;
    }
    const memberNum = context.userNum;
    const success = await AlarmAxiosApi.replyAlarm(postNum, memberNum, replyContent);
    if (success) {
      setContent('');
      setIsModalOpen(true);
      fetchReply();
    } else {
      alert('댓글 작성에 실패했습니다.');
    }
  };

  return (
    <>
      <CommentFormWrapper>
        {userPfImgUrl ? (
          <CommentFormAvatar src={userPfImgUrl} />
        ) : (
          <AccountCircleIcon style={{ marginRight: '10px', fontSize: 45, color: '#3B74EC' }} />
        )}
        <CommentFormTextField
          fullWidth
          label="댓글 작성"
          id="fullWidth"
          onChange={handleReplyChange}
          onClick={handleClick}
          value={replyContent}
        />
        <CommentFormButton onClick={handleReplySubmit}>등록</CommentFormButton>
      </CommentFormWrapper>
      {isModalOpen && (
     <EditPopUp open={isModalOpen} close={() => setIsModalOpen(false)} type="exit" header="댓글 등록">
        댓글이 성공적으로 등록되었습니다 😆
      </EditPopUp>
      )}
    </>
  );
};

export default ReplyForm;