import React from 'react';
import GalleryCaption from './GalleryCaption';
import GalleryThumbnail from './Thumbnail';

// 한 게시글의 이미지 썸네일, 글 제목과 작성자 
const GalleryItem = ({ item }) => {
  return (
    <div>
      <GalleryThumbnail src={item.thumbnailUrl} alt={item.title} />
      <GalleryCaption title={item.title} author={item.author} />
    </div>
  );
};

export default GalleryItem;
