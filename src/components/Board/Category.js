import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { UserContext } from '../../context/UserInfo';
import MainAxiosApi from '../../api/MainAxiosApi';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 100px;
  margin-left: 121px;
  margin-bottom: 15px;
  margin-top : 50px;
  @media (max-width: 768px) {
    padding-left: 60px;
    width : 70%;
  }
  @media (max-width: 400px) {
    margin-left: 0;
    margin-top: 35px;
  }
`;

const StyledCategorySelect = styled(FormControl)`
  width: 250px;
  margin-bottom: 8px;
  @media (max-width: 440px) {
    width: 270px;
  }
`;

const SelectCategory = ({value, onChange}) => {
  const options = [
    { boardNum: 1, text: 'Q&A' },
    { boardNum: 2, text: '정보 공유' },
    { boardNum: 3, text: '직장인' },
    { boardNum: 4, text: '포트폴리오' },
  ];

  const context = useContext(UserContext);
  const {userNum} = context;
  const [userJob, setUserJob] = useState("");

  // 회원 직업 가져오기
  useEffect(() => {
    const userJob = async (memberNum) => {
      const response = await MainAxiosApi.userJobByNum(memberNum);
      setUserJob(response.data);
    };
      userJob(userNum);
  }, [userNum]);


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
          label="게시판 선택" >
            {options.map((option) => {
            if ((userJob === "구직자" || userJob === "학생") && option.boardNum === 3) {
              return null;
             }
            return (
           <MenuItem key={option.boardNum} value={option.boardNum}>
             {option.text}
          </MenuItem>
              );
          })}
        </Select>
      </StyledCategorySelect>
    </Wrapper>
  );
}

export default SelectCategory;