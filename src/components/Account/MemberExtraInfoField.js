import React, { useState } from 'react';
import styled from 'styled-components';
import { Select, MenuItem, InputLabel, FormControl, Button} from '@mui/material';
import TechStackSelection from './TechStackSelection';

const ParentWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    width: 80%;
  }
  .input_container {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
    width: 100%;
  }
  }
  .job_and_year_field {
    display: flex;
    margin: 0 auto;
    width: 80%; 
  }

  .prev_button {
    border-radius: 20px;
    background-color: #eee;
    color: black;
  }
  .disable_button {
    border-radius: 20px;
    background-color: #eee;
  }
  .enable_button {
    border-radius: 20px;
    background-color: #3b74ec;
  }
`;


const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MemberExtraInfoField = () => {  
  // 입력받을 값
  const [inputJob, setInputJob] = useState("");
  const [inputCareerYear, setInputCareerYear] = useState("");
  const [careerYearDisabled, setCareerYearDisabled] = useState(true);

  // 사용자 입력
  const onChangeJob = (e) => {
    const job = e.target.value;
    setInputJob(job);
    console.log(inputJob);

    // 특정 직업 선택시 연차 셀렉트박스 활성화
    if (job === "풀스택" || job === "백엔드" || job === "프론트엔드") {
      setCareerYearDisabled(false);
    } else {
      setCareerYearDisabled(true);
      setInputCareerYear("");
    }
  }
  
  const onChangeCareerYear = (e) => {
    setInputCareerYear(e.target.value);
    console.log(inputCareerYear);
  }


  // '다음' 버튼 (모든 필드가 입력되어 있지 않으면 disable)
  const handleButtonClick = () => {
    if(inputJob) {
      console.log('job:', inputJob);
      console.log('year:', inputCareerYear);
    } else {
      console.log("모든 필드 입력 요망")
    }
  };


  return(
    <ParentWrapper>
      <div className='input_field'>
        <div className='job_and_year_field'>
              <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
              <InputLabel>직업</InputLabel>                  
                <Select
                    value={inputJob}
                    label="직업"
                    onChange={onChangeJob}
                    autoWidth
                    sx={{ borderRadius: 4 }}
                    required
                  >
                    <MenuItem sx={{ borderRadius: 4 }} value="풀스택">풀스택</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value="백엔드">백엔드</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value="프론트엔드">프론트엔드</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value="학생">학생</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value="구직자">구직자</MenuItem>
                  </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                <InputLabel>연차</InputLabel>
                  <Select
                    value={inputCareerYear || ""}
                    label="연차"
                    onChange={onChangeCareerYear}
                    disabled={careerYearDisabled}
                    autoWidth
                    sx={{ borderRadius: 4 }}

                  >
                    <MenuItem sx={{ borderRadius: 4 }} value={1}>1년차</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value={2}>2년차</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value={3}>3년차</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value={4}>4년차</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value={5}>5년차</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value={6}>6년차</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value={7}>7년차</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value={8}>8년차</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value={9}>9년차</MenuItem>
                    <MenuItem sx={{ borderRadius: 4 }} value={10}>10년 이상</MenuItem>
                  </Select>
              </FormControl>
          </div>
      </div>
      <TechStackSelection />
      <ButtonWrapper>
      <Button
      className="prev_button"
      type="button"
      // onClick={}
      variant="contained"
      size="large"
    >
      이전
    </Button>
      {inputJob ? (
        <Button
          className="enable_button"
          type="button"
          onClick={handleButtonClick}
          variant="contained"
          size="large"
        >
          다음
        </Button>
      ) : (
        <Button
          className="disable_button"
          type="button"
          onClick={handleButtonClick}
          variant="contained"
          size="large"
        >
          다음
        </Button>
      )}
      </ButtonWrapper>
    </ParentWrapper>
  );
}
export default MemberExtraInfoField;