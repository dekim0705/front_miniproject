import React from 'react';
import styled from 'styled-components';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

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
  width : 1000px;
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
// const ButtonWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: auto;
//   margin-top: 5px;
// `;

// const Button = styled.button`
//   border: none;
//   background-color: transparent;
//   margin-left: 10px;
//   cursor: pointer;
//   color: ${({ color }) => color || '#000'};
//   &:hover {
//     text-decoration: underline;
//   }
// `;


const CommentItem = ({ reply }) => {
  // const isMyComment = id === 3; //더미 데이터에서 댓글 작성자의 id가 3일 경우에만 true

  // const handleDelete = () => {
  //   console.log('삭제버튼을 누름');
  // };

  // const handleEdit = () => {
  //   console.log('수정버튼을 누름');
  // };

  return (
    <CommentItemWrapper>
      <CommentItemImg src={reply.pfImg} />
      <CommentItemContentWrapper>
        <CommentItemAuthor>{reply.nickname}</CommentItemAuthor>
        <CommentItemContent>{reply.replyContent}</CommentItemContent>
        {/* {isMyComment && (
          <ButtonWrapper>
            <Button onClick={handleEdit}>
            <EditIcon style={{ color: '#707070' }}/>
            </Button>
            <Button onClick={handleDelete}>
           <DeleteIcon style={{ color: '#707070' }}/>
            </Button>
            </ButtonWrapper>
             )} */}
      </CommentItemContentWrapper>
    </CommentItemWrapper>
  );
};

export default CommentItem;
