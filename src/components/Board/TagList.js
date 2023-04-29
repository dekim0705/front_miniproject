import React from 'react';
import styled from 'styled-components';

const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding : 20px;
`;

const TagItem = styled.span`
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 10px;
  margin-bottom: 8px;
`;

const dummyTags = "#취업후기 #취뽀후기 #주니어개발자";

const TagList = ({ tags }) => {
  const tagArray = tags.split(' ');

  return (
    <TagListWrapper>
      {tagArray.map((tag, index) => (
        <TagItem key={index}>{tag}</TagItem>
      ))}
    </TagListWrapper>
  );
};


export { TagList, dummyTags };
export default TagList;
