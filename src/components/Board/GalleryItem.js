import React from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';


const Container = styled.div`
  width: calc(100% / 3 - 2%);
  margin: 1%;
  position: relative;
  border-radius : 15px;
  height: 280px;
  padding-bottom: 40px; 
 
  @media (max-width: 768px) {
    width: 80%;
    margin: 2.5%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 15px;
  
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 260px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight:bold;
  text-align: center;
  margin: 0;
  padding: 0 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${Overlay}:hover & {
    opacity: 1;
  }
`;


const Info = styled.div`
  position: absolute;
  bottom: 0;
  padding: 5px;
  background-color: white;
  width: 100%;
  display: flex; 
  justify-content: space-between; 
  padding-top: 10px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Nickname = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Status = styled.p`
  margin: 0;
  font-size: 12px;
  color: #777;
  display: inline-flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  margin-left: 5px;
  padding-right : 5px;
`;

const Gap = styled.span`
  margin-right: 5px;
`;

const ProfilePic = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;


const GalleryItem = ({ item }) => (
   <Container>
    <Thumbnail src={item.imgUrl} alt={item.title} />
    <Overlay>
      <StyledLink to={`/post/${item.postNum}`}>{item.title}</StyledLink>
    </Overlay>
    <Info>
    <UserInfo>
    <ProfilePic src={item.pfImg} alt={item.nickname} />
      <Nickname>{item.nickname}</Nickname>
      </UserInfo>
      <Status>
        <IconWrapper>
          <ThumbUpIcon fontSize="small" />
        </IconWrapper>
        {item.likeCount} 
        <Gap />
        <IconWrapper>
          <RemoveRedEyeIcon fontSize="small" />
        </IconWrapper>
        {item.viewCount}
      </Status>
    </Info>
  </Container>
);

export default GalleryItem;
