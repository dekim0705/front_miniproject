import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const options = [
  { path: '/mentor', text: '멘토찾기' },
  { path: '/information/1', text: '정보 공유' },
  { path: '/portfolio/1', text: '포트폴리오' },
  { path: '/worker/1', text: '직장인' },
  { path: '/best/1', text: '베스트' },
  { path: '/qna/1', text: 'Q&A' },
];

const ITEM_HEIGHT = 48;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledNavbar>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{fontSize: 40, color: '#3B74EC'}} />
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
    </StyledNavbar>
  );
};

export default Navbar;