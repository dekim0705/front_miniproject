import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Header from "../components/Header";
import CategorySelect from "../components/Board/CategorySelect";
import TitleInput from "../components/Board/Title";
import TagField from "../components/Board/TagInput";
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;

`;

const EditorWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  
  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 400px;
  }
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
  padding-right : 220px;
  padding-bottom : 80px;
  `;




const EditPage = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const handleSubmit = () => {
    console.log(content);
    // 게시글 등록 처리 로직 추가
  };

  return (
    <>
      <Header />
      <Wrapper>
      <Row>
        <Col>
        <CategorySelect /> 
        <TitleInput />
        <EditorWrapper>
          <CKEditor editor={ClassicEditor}config={{placeholder: "내용을 입력하세요.",}}onChange={handleEditorChange}/>
        </EditorWrapper>
          <TagField/>
        </Col>
      </Row>
      </Wrapper>
      <ButtonWrapper>
       <Button variant="contained" style={{ borderRadius: "20px", fontSize: "18px", padding: "8px 25px"}} onClick={handleSubmit}>등록</Button>
    </ButtonWrapper>
    </>

  );
};

export default EditPage;