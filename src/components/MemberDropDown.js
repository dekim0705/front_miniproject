import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../context/UserInfo';

const StyledAccountBar = styled.div`
  @media screen and (min-width: 769px) {
    display: block;
  }
`;

const options = [
  { path: '/', text: '로그아웃' },
  { path: '/mypage', text: '마이페이지' }
];

const ITEM_HEIGHT = 48;

const MemberDropDown = ({ setIsLogin, resetUser }) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option) => {
    setAnchorEl(null);
    if(option.text === '로그아웃') {
      setIsLogin(false);
      resetUser();
    } navigate(option.path);
  };

  return (
    <StyledAccountBar>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleIcon style={{fontSize: 40, color: '#3B74EC'}} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.text} onClick={() => handleClose(option)}>
            {option.text}
          </MenuItem>
        ))}
      </Menu>
    </StyledAccountBar>
  );
};

export default MemberDropDown;