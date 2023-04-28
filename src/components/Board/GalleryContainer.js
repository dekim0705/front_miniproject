import React from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';
import WriteButton from './WriteButton';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -0.5%;
  padding: 30px; 
  max-width: 1000px; 
  margin: 0 auto; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const WriteButtonWrapper = styled.div`

  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
  margin-right : 10px;
  
`;



const dummyData = [
  {
    id: 1,
    title: '제목 1',
    nickname: '작성자 1',
    thumbnail: 'https://via.placeholder.com/150',
    likes: 125,
    views: 542
  },
  {
    id: 2,
    title: '제목 2',
    nickname: '작성자 2',
    thumbnail: 'https://via.placeholder.com/150',
    likes: 95,
    views: 324
  },
  {
    id: 3,
    title: '제목 3',
    nickname: '작성자 3',
    thumbnail: 'https://via.placeholder.com/150',
    likes: 125,
    views: 542
  },
  {
    id: 4,
    title: '제목 4',
    nickname: '작성자 4',
    thumbnail: 'https://via.placeholder.com/150',
    likes: 95,
    views: 324
  },
  {
    id: 5,
    title: '제목 5',
    nickname: '작성자 5',
    thumbnail: 'https://via.placeholder.com/150',
    likes: 125,
    views: 542
  },
  {
    id: 6,
    title: '제목 6',
    nickname: '작성자 6',
    thumbnail: 'https://via.placeholder.com/150',
    likes: 95,
    views: 324
  },
];

const GalleryContainer = () => (
  <>
    <Container>
    {dummyData.slice(0, 6).map((item) => (
      <GalleryItem key={item.id} item={item} />
    ))}
     <WriteButtonWrapper>
      <WriteButton />
    </WriteButtonWrapper>
  </Container>

  </>


);

export default GalleryContainer;
