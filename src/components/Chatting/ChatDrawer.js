import React from "react";
import Drawer from "@mui/material/Drawer";
import ChatUserInfo from "./ChatUserInfo";

const ChatDrawer = ({ drawerState, toggleDrawer }) => {
  const anchor = "right";

  return (
    <div>
      <Drawer
        anchor={anchor}
        open={drawerState[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <ChatUserInfo toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default ChatDrawer;
