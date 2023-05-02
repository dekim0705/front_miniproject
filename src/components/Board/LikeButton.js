import React from "react";
import { ThumbUpOutlined, ThumbUpAltSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const LikeButton = () => {
  // 추후에 상태에 따라 true 또는 false로 변경되도록 구현
  const isLiked = true;

  return (
    <>
      {isLiked ? (
        <IconButton sx={{padding: '10px', margin: '0 20px'}}>
          <ThumbUpAltSharp sx={{ fontSize: '35px'}} />
        </IconButton>
      ) : (
        <IconButton sx={{padding: '10px', margin: '0 20px'}}>
          <ThumbUpOutlined sx={{ fontSize: '35px'}} />
        </IconButton>
      )}
    </>
  );
}; 



export default LikeButton;
