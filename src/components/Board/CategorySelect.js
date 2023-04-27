import React from 'react';
import styled from 'styled-components';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  width: 100%;
  padding-left: 100px;
  margin-left: 120px;
  margin-bottom:0;
  margin-top : 50px;
`;

const StyledCategorySelect = styled(FormControl)`
  width: 250px;
  margin-bottom: 8px;
`;

const SelectCategory = ({value, onChange}) => {
  const options = [
    { boardNum: 1, text: 'Q&A' },
    { boardNum: 2, text: '정보 공유' },
    { boardNum: 3, text: '포트폴리오' },
    { boardNum: 4, text: '직장인' },
    { boardNum: 5, text: '베스트' },
  ];

  return (
    <Wrapper>
      <StyledCategorySelect variant="outlined">
        <InputLabel id="category-select-label">게시판 선택</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={value}
          onChange={onChange}
          label="게시판 선택"
        >
          {options.map((option) => (
            <MenuItem key={option.boardNum} value={option.boardNum}>
              {option.text}
            </MenuItem>
          ))}
        </Select>
      </StyledCategorySelect>
    </Wrapper>
  );
}

export default SelectCategory;
