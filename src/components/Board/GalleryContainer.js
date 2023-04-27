import React from 'react';
import GalleryItem from './GalleryItem';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  & > * {
    width: calc(100% / 3 - 16px); // 한줄에 3개씩
    margin-bottom: 32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 960px) {
    & > * {
      width: calc(50% - 16px);
    }
  }

  @media (max-width: 600px) {
    & > * {
      width: 100%;
    }
  }
`;

const dummyData = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    nickname: 'John Doe',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Dolor Sit Amet',
    nickname: 'Jane Smith',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Consectetur Adipiscing Elit',
    nickname: 'Mike Johnson',
    imageUrl: 'https://via.placeholder.com/300',
  },
 
  {
      id: 4,
      title: 'Lorem Ipsum',
      nickname: 'John Doe',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      title: 'Dolor Sit Amet',
      nickname: 'Jane Smith',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 6,
      title: 'Consectetur Adipiscing Elit',
      nickname: 'Mike Johnson',
      imageUrl: 'https://via.placeholder.com/300',
    }

  ];

const GalleryContainer = () => {
  return (
    <Container>
      {dummyData.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default GalleryContainer;
