import React from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Container = styled.div`
  width: calc(100% / 3 - 2%);
  margin: 0.5%;
  position: relative;
  border-radius : 15px;
  

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
  max-height: 260px; 
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  padding-bottom : 10px;
  
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
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

const Nickname = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Status = styled.p`
  margin: 0;
  font-size: 12px;
  color: #777;
  display: flex;
  align-items: center;
  
`;

const IconWrapper = styled.span`
  margin-right: 3px;
`;

const Gap = styled.span`
  margin-right: 10px;
`;

const GalleryItem = ({ item }) => (
   <Container>
    <Thumbnail src={item.thumbnail} alt={item.title} />
    <Overlay>
      <Title>{item.title}</Title>
    </Overlay>
    <Info>
      <Nickname>{item.nickname}</Nickname>
      <Status>
        <IconWrapper>
          <ThumbUpIcon fontSize="small" />
        </IconWrapper>
        {item.likes} 
        <Gap />
        <IconWrapper>
          <RemoveRedEyeIcon fontSize="small" />
        </IconWrapper>
        {item.views}
      </Status>
    </Info>
  </Container>
);

export default GalleryItem;
