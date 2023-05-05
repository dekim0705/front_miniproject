import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PopUp from "../../util/PopUp";
import boardAxiosApi from "../../api/BoardAxiosApi";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  margin-right : 210px;
  margin-bottom : 50px;
`;

const EditButton = ({postNum}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const handleDeletePost = async () => {
    try {
      await boardAxiosApi.deletePost(postNum);
      setIsModalOpen(false);
      setPopUpOpen(true);
    } catch (error) {
      console.error("게시글 삭제에 실패했습니다.", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const closePopUp = () => {
    setPopUpOpen(false);
    navigate("/");
  }


  return (
    <>
    <Wrapper>
      <Stack spacing={3} direction="row">
        <Button variant="outlined" sx={{ width: '80px' }} component={Link} to={`/edit/${postNum}`}>수정</Button>
        <Button variant="contained" sx={{ width: '80px' }} onClick={() => setIsModalOpen(true)}>삭제</Button>
      </Stack>
    </Wrapper>
     <PopUp
     open={isModalOpen} confirm={handleDeletePost}close={handleCloseModal}type="confirm" header="게시글 삭제">
     <p>게시글을 삭제하시겠습니까?</p>
   </PopUp>
   <PopUp
     open={popUpOpen} close={closePopUp} type={false} header="삭제 완료">
      글이 삭제되었습니다! 😆
  </PopUp>
   </>
  );
};

export default EditButton;
