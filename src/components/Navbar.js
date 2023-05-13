import React, { useContext, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserInfo";
import { getPath } from "../util/getPath";
import useCheckUserMatched from "../util/useCheckUserMatched";
import MainAxiosApi from "../api/MainAxiosApi";
import PopUp from "../util/PopUp";

const StyledNavbar = styled.div`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const getOptions = (mentorPath) => [
  { id: "mentor", path: "/mentor", text: "멘토찾기" },
  { id: "information", path: "/information/1", text: "정보 공유" },
  { id: "portfolio", path: "/portfolio/1", text: "포트폴리오" },
  { id: "worker", path: "/worker/1", text: "직장인" },
  { id: "best", path: "/best/1", text: "베스트" },
  { id: "qna", path: "/qna/1", text: "Q&A" },
];

const ITEM_HEIGHT = 48;

const Navbar = () => {
  const { userNum } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const isMatched = useCheckUserMatched(userNum);
  const mentorPath = getPath("/mentor", isMatched);

  const [userJob, setUserJob] = useState("");
  const [PopUpOpen, setPopUpOpen] = useState(false);

  const closePopUp = () => {
    setPopUpOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // ✅ 회원 직업 가져오기
  useEffect(() => {
    const userJob = async (memberNum) => {
      const response = await MainAxiosApi.userJobByNum(memberNum);
      setUserJob(response.data);
    };
    userJob(userNum);
  }, [userNum]);

  const handleWorkerClick = (e) => {
    if (userJob === "학생" || userJob === "구직자") {
      e.preventDefault();
      setPopUpOpen(true);
    }
  };

  return (
    <StyledNavbar>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ fontSize: 40 }} />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {getOptions(mentorPath).map((option) => (
          <MenuItem
            key={option.id}
            component={Link}
            to={option.path}
            onClick={option.id === "worker" ? handleWorkerClick : handleClose}
          >
            {option.text}
          </MenuItem>
        ))}
      </Menu>
      {PopUpOpen && <PopUp open={PopUpOpen} close={closePopUp} type={false} header="경고">직장인만 열람 가능한 게시판 입니다.😥</PopUp>}
    </StyledNavbar>
  );
};

export default Navbar;
