import React from "react";
import { Link } from 'react-router-dom';
import logo from '../resource/개발러스 로고.svg';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    .navbar__logo {
    width: 20rem;
    }
`;

const LogoBigger = () => {
    return (
    <StyledLink to='/'>
        <img className="navbar__logo" src={logo} alt="개발러스 로고" />
    </StyledLink>
    );
}

export default LogoBigger;