import React from "react";
import { ThumbUpOutlined, ThumbUpAltSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const LikeButton = () => {
  // 추후에 상태에 따라 true 또는 false로 변경되도록 구현
  const isLiked = false;

  return (
    <>
      {isLiked ? (
        <IconButton>
          <ThumbUpAltSharp sx={{ fontSize: '35px', margin: '8px'}} />
        </IconButton>
      ) : (
        <IconButton>
          <ThumbUpOutlined sx={{ fontSize: '35px', margin: '8px'}} />
        </IconButton>
      )}
    </>
  );
}; 



export default LikeButton;
