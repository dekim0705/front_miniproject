import React from 'react';
import styled from 'styled-components';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

// 글 작성시 카테고리선택 

const StlyedCategorySelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledFormControl = styled(FormControl)`
  min-width: 120px;
  margin-right: 16px;


`;



const CategorySelect = ({value, onChange}) => {
  const options = [
    { boardNum: 1, text: 'Q&A' },
    { boardNum: 2, text: '정보 공유' },
    { boardNum: 3, text: '포트폴리오' },
    { boardNum: 4, text: '직장인' },
    { boardNum: 5, text: '베스트' },
  ];

  return (
    <FormControl sx={{ m: 1, width: 250}}>
      <InputLabel id="category-select-label">게시판 선택</InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={value}
        onChange={onChange}
        input={<OutlinedInput />}
      >
        {options.map((option) => (
          <MenuItem key={option.boardNum} value={option.boardNum}>
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CategorySelect;