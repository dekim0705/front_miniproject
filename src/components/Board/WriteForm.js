import { useState } from 'react';
import SelectCategory from './Category';
import TitleInput from './Title';
import ContentInput from './ContentInput';
import styled from 'styled-components';
import TagField from './TagInput';
import Button from '@mui/material/Button';
import ImageUpload from './ImageUpload';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  padding-right: 220px;
  padding-bottom: 80px;
`;

const WriteForm = ({ userNum, onSubmit }) => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    tag: '',
    imgUrl: '',
    boardNum: '',
    memberNum: userNum // 회원 번호
  });

  const handleBoardNumChange = (boardNum) => {
    setPost((prevPost) => ({ ...prevPost, boardNum }));
  };

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setPost((prevPost) => ({ ...prevPost, title }));
  };

  const handleContentChange = (content) => {
    setPost((prevPost) => ({ ...prevPost, content }));
  };

  const handleTagChange = (event) => {
    const tag = event.target.value;
    setPost((prevPost) => ({ ...prevPost, tag }));
  };

  const handleImageUpload = (urls) => {
    console.log('Uploaded URLs 출력:', urls);
    const imgUrl = urls; // 배열 대신 문자열 그대로 할당
    setPost((prevPost) => ({ ...prevPost, imgUrl }));
  };
  
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(post);
  };

  return (
    <>
      <Wrapper>
        <Row>
          <Col>
            <SelectCategory value={post.boardNum} onChange={handleBoardNumChange} />
            <TitleInput value={post.title} onChange={handleTitleChange} />
            <ContentInput value={post.content} onChange={handleContentChange} />
            <ImageUpload onImageUpload={handleImageUpload} />
            <TagField value={post.tag} onChange={handleTagChange} />
          </Col>
        </Row>
      </Wrapper>
      <ButtonWrapper>
        <Button variant="contained" style={{ borderRadius: "20px", fontSize: "18px", padding: "8px 25px" }} onClick={handleSubmit}>등록</Button>
      </ButtonWrapper>
    </>
  );
};

export default WriteForm;
