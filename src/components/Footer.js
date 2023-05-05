import React from "react";
import styled from "styled-components";
import PublicIcon from '@mui/icons-material/Public';
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #eee;
  color: #616161;
`;

const Sitemap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px 0;
  font-size: 0.7em;
  text-decoration: none;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  font-size: 12px;
  padding: 20px 100px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

const Language = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Etc = styled.li`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  gap: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Sitemap> 
        <li>
          <Link to="/mentor">Find Mentor</Link>
        </li>
        <li>
          <Link to="/information">Infomation Share</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/worker">Workers</Link>
        </li>
        <li>
          <Link to="/best">BEST</Link>
        </li>
        <li>
          <Link to="/qna">QnA</Link>
        </li>
      </Sitemap>
      <FooterInfo>
        <Language>
          <PublicIcon />한국어(대한민국)
        </Language>
        <Etc>
          <ul>
            <li>개발러스 문의</li>
            <li>개인정보처리방침 및 위치정보이용약관</li>
            <li>사용약관</li>
            <li>상표</li>
            <li>광고 정보</li>
            <li>ⓒ Developer Community 2023</li>
          </ul>
        </Etc>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;