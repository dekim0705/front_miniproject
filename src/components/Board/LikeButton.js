import React, { useState, useEffect, useContext } from "react";
import { ThumbUpOutlined, ThumbUpAltSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import boardAxiosApi from "../../api/BoardAxiosApi";
import { UserContext } from "../../context/UserInfo";
import EditPopUp from "../../util/EditPopUp";


const LikeButton = ({ postNum }) => {
  const [isLiked, setIsLiked] = useState(false);
  const context = useContext(UserContext);
  const memberNum = context.userNum;
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");


  useEffect(() => {
    const fetchLikesStatus = async () => {
      if (memberNum) {
        try {
          const result = await boardAxiosApi.likeStaus(postNum, memberNum);
          setIsLiked(result.isLiked);
 
        } catch (error) {
          console.error('좋아요 정보를 가져오는 도중 에러가 발생했습니다:', error);
        }
      }
    };

    fetchLikesStatus();
  }, [memberNum, postNum]);

  const handleLikeClick = async () => {
    if (!memberNum) {
      setModalMessage('로그인이 필요한 서비스입니다.');
      setOpenModal(true);
      return;
    }

    try {
      const result = await boardAxiosApi.updateLikes(postNum, memberNum);
      setIsLiked(result);
      if (result) {
        setModalMessage('추천을 눌렀습니다 😆👍🏻');
      } else {
        setModalMessage('추천을 취소했습니다 🥲');
      }
      setOpenModal(true);
    } catch (error) {
      console.error('추천 업데이트 실패', error);
    }
  };

  return (
    <>
      {!isLiked ? (
        <IconButton onClick={handleLikeClick} sx={{ padding: '10px',  position: "absolute", right: 0,}} key={`${postNum}-not-liked`}>
          <ThumbUpOutlined sx={{ fontSize: '35px' }} />
        </IconButton>
      ) : (
        <IconButton onClick={handleLikeClick} sx={{ padding: '10px',  position: "absolute", right: 0,}}key={`${postNum}-liked`}>
          <ThumbUpAltSharp sx={{ fontSize: '35px' }} />
        </IconButton>
      )}
     {openModal && (
     <EditPopUp open={openModal} close={() => setOpenModal(false)} type="exit" header="알림">
      {modalMessage}
      </EditPopUp>
       )}
    </>
  );
};

export default LikeButton;




