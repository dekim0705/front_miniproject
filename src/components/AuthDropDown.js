import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAccountBar = styled.div`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const options = [
  { path: '/login', text: '로그인' },
  { path: '/join', text: '회원가입' }
];

const ITEM_HEIGHT = 48;

const AuthDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <MenuItem key={option.text} component={Link} to={option.path} onClick={handleClose}>
            {option.text}
          </MenuItem>
        ))}
      </Menu>
    </StyledAccountBar>
  );
};

export default AuthDropDown;