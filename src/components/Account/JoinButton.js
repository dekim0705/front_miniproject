import React from "react";
import { Button } from "@mui/material";

const JoinButton = ({ onClick, children, ...rest }) => {
  
  const handleButtonClick = () => {
    onClick();
  }

  return(
    <Button
      onClick={handleButtonClick}
      variant="contained"
      size="large"
      sx={{ 
        borderRadius: 5,
        backgroundColor: '#E5E7EA', 
        color: '#1E2B4D',
        ...rest.sx
      }}
    >
      {children}
    </Button>
  );
}
export default JoinButton;