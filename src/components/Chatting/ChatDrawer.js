import React from "react";
import Drawer from "@mui/material/Drawer";
import ChatUserInfo from "./ChatUserInfo";
import styled from "styled-components";

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    position: absolute;
    width: 50%;
    max-width: 350px;
  }

  @media (max-width: 768px) {
    & .MuiDrawer-paper {
      width: 70%;
      max-width: none;
    }
  }
`;

const ChatDrawer = ({ drawerState, toggleDrawer }) => {
  return (
    <div>
      <StyledDrawer
        anchor="right"
        open={drawerState.right}
        onClose={toggleDrawer("right", false)}
      >
        <ChatUserInfo toggleDrawer={toggleDrawer} />
      </StyledDrawer>
    </div>
  );
};

export default ChatDrawer;