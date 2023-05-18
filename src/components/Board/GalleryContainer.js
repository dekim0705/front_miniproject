import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import GalleryItem from './GalleryItem';
import WriteButton from './BoardWriteButton';
import boardAxiosApi from '../../api/BoardAxiosApi';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 30px; 
  max-width: 1050px; 
  margin: 0 auto; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
  }
`;
const WriteButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  width: 100%;
  margin-right : 10px;
`;

const GalleryContainer = ({ pageNum }) => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await boardAxiosApi.requestPortfolioList(pageNum);
        setGalleryItems(response);
      } catch (error) {
        console.error('포트폴리오를 불러올 수 없습니다', error);
      }
    };

    fetchGalleryItems();
  }, [pageNum]);


  return (
  <>
    <Container>
    {galleryItems.slice(0, 6).map((item) => (
      <GalleryItem key={item.postNum} item={item} />
    ))}
     <WriteButtonWrapper>
      <WriteButton />
    </WriteButtonWrapper>
  </Container>
  </>
  );
};

export default GalleryContainer;
