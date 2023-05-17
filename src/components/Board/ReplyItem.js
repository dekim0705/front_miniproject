import React,{useContext, useState} from 'react';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserContext } from '../../context/UserInfo';
import EditPopUp from '../../util/EditPopUp';
import boardAxiosApi from '../../api/BoardAxiosApi';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';

const CommentItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 20px;
`;

const CommentItemImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CommentItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 1500px;
`;

const CommentItemAuthor = styled.span`
  font-weight: bold;
  margin-left: 5px;
  
`;

const CommentItemContent = styled.span`
  margin-top: 5px;
  padding: 15px;
  border-radius: 15px;
  border: 1px solid #c4c4c4;
  display: inline-block;
  height: 50px;
  font-size: 0.9rem;
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 15px;
    font-size: 0.9rem;
    margin-top : 5px;
    padding: 15px;

  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 5px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 10px;
  cursor: pointer;
  color: ${({ color }) => color || '#000'};
  &:hover {
    text-decoration: underline;
  }
`;


const ReplyItem = ({ reply ,fetchReply}) => {
  const context = useContext(UserContext);
  const { userNickname } = context;
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [deletePopUpOpen, setDeletePopUpOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [replyContent, setReplyContent] = useState(reply.replyContent); // 수정 댓글 내용 저장

  const isMyComment = userNickname === reply.nickname;

  const handleDelete = async () => {
    try {
      await boardAxiosApi.deleteReply(reply.replyNum);
      console.log(reply);
      setDeletePopUpOpen(false);
      setPopUpOpen(true);
      await fetchReply();
    } catch (error) {
    console.error('댓글 삭제 실패:', error);
    }
  };

  const handleEdit = async () => {
    try {
      await boardAxiosApi.updateReply(reply.replyNum, replyContent);
      console.log('댓글 수정 성공');
      setIsEditMode(false);
      await fetchReply();
    } catch (error) {
      console.error('댓글 수정 실패:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditMode(true);
    setReplyContent(reply.replyContent);
    
  };

  const handleDeltetPopUp = () => {
    setDeletePopUpOpen(true);
  };

  
  const handleReplyChange = (e) => {
    setReplyContent(e.target.value );
  };
  
  
  return (
    <CommentItemWrapper>
      <CommentItemImg src={reply.pfImg} />
      <CommentItemContentWrapper>
        <CommentItemAuthor>{reply.nickname}</CommentItemAuthor>
        {isEditMode ? (
          <StyledTextField
          multiline
          rows={2.5}
          fullWidth
          variant="outlined"
          value={replyContent}
          onChange={handleReplyChange}
        />
    ) : (
        <CommentItemContent>{reply.replyContent}</CommentItemContent> )}
        {isMyComment && (
          <ButtonWrapper>
             {isEditMode ? (
                <Button onClick={handleEdit}>
                  <SaveIcon style={{ color: '#707070' }} />
                </Button>
                ) : (
              <>
            <Button onClick={handleEditClick}>
            <EditIcon style={{ color: '#707070' }}/>
            </Button>
            <Button onClick={handleDeltetPopUp}>
           <DeleteIcon style={{ color: '#707070' }}/>
            </Button>
            </>
            )}
          </ButtonWrapper>
             )}

          <EditPopUp open={deletePopUpOpen} confirm={handleDelete} close={() => setDeletePopUpOpen(false)} type="confirm" header="알림">
            삭제된 댓글은 복구가 <span style={{color:"red", fontWeight:"bold"}}>불가능</span>합니다.<br /> 댓글을 삭제하시겠습니까? </EditPopUp>
      </CommentItemContentWrapper>
    </CommentItemWrapper>
  );
};

export default ReplyItem;
