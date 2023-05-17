import React from 'react';
import styled from 'styled-components';

const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 23px;
`;

const TagItem = styled.span`
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 5px 8px;
  margin-right: 10px;
  margin-bottom: 8px;
  &:empty {
    display: none;
  }
`;

const TagList = ({ tags }) => {
  const tagArray = tags ? tags.split(' ') : [''];

  return (
    <TagListWrapper>
      {tagArray.map((tag, index) => (
        <TagItem key={index}>{tag}</TagItem>
      ))}
    </TagListWrapper>
  );
};

export default TagList;
