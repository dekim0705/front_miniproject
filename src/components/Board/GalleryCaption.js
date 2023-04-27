import React from 'react';

const GalleryCaption = ({ title, nickname }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{nickname}</p>
    </div>
  );
};

export default GalleryCaption;
