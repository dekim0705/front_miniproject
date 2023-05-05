import React from 'react';
import styled from 'styled-components';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 100px;
  margin-left: 121px;
  margin-bottom: 15px;
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
    { boardNum: 3, text: '직장인' },
    { boardNum: 4, text: '포트폴리오' },
  ];
  const handleChange = (event) => {
    const selectedBoardNum = event.target.value;
    onChange(selectedBoardNum);
  };

  return (
    <Wrapper>
      <StyledCategorySelect variant="outlined">
        <InputLabel id="category-select-label">게시판 선택</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={value}
          onChange={(event) => handleChange(event)}
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