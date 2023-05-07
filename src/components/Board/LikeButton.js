import React, { useState, useEffect, useContext } from "react";
import { ThumbUpOutlined, ThumbUpAltSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import boardAxiosApi from "../../api/BoardAxiosApi";
import { UserContext } from "../../context/UserInfo";

const LikeButton = ({postNum}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const context = useContext(UserContext);

  const memberNum = context.userNum;

  useEffect(() => {
    const updateLikes = async (postNum,memberNum) => {
      try {
        const result = await boardAxiosApi.updateLikes(postNum, memberNum);
        console.log('postNum:', postNum, 'memberNum:', memberNum);
        setLikesCount(result);
        setIsLiked(result > 0);

      } catch (error) {
        console.error('좋아요 정보를 가져오는 도중 에러가 발생했습니다:', error);
      }
    };
    updateLikes(postNum, memberNum);
  }, [postNum, memberNum]);
  

const handleLikeClick = async () => {
  if (!memberNum) {
    alert('로그인이 필요한 서비스입니다.');
    return;
  }
  try {
    const newLikesCount = !isLiked;
    await boardAxiosApi.updateLikes(postNum, memberNum);
    setLikesCount(newLikesCount ? likesCount + 1 : likesCount - 1);
    setIsLiked(newLikesCount);

    if (!isLiked) {
      alert('추천을 눌렀습니다.');
    } else {
      alert('추천을 취소했습니다.');
    }
  } catch (error) {
    console.error('좋아요 처리에 실패했습니다.', error);
  }
};



  return (
    <>
      {isLiked ? (
        <IconButton onClick={handleLikeClick} sx={{padding: '10px', margin: '0 20px'}}>
          <ThumbUpAltSharp sx={{ fontSize: '35px'}} />
        </IconButton>
      ) : (
        <IconButton onClick={handleLikeClick} sx={{padding: '10px', margin: '0 20px'}}>
          <ThumbUpOutlined sx={{ fontSize: '35px'}} />
        </IconButton>
      )}
    </>
  );
}; 



export default LikeButton;
