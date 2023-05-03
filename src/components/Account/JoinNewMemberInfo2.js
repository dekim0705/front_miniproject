import React, { useState, useEffect } from 'react';
import AccountAxiosApi from '../../api/AccountAxiosApi';
import styled from 'styled-components';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ParentWrapper, InnerWrapper, ButtonWrapper, FlexRowWrapper, FlexColumnWrapper } from './Wrappers';
import JoinButton from './JoinButton';
import { TextField } from '@mui/material';
import PopUp from '../../util/PopUp';

const ResultField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const SingleTechStack = styled.button`
  border: 0.1rem solid #E5E7EA ;
  background-color: #ffffff;
  border-radius: 20px;
  padding-left: 4px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    border: 1.5px solid #3B74EC;
  }
    /* 선택된 버튼 스타일 */
  &.selected {
    border: 1.5px solid #3B74EC;
    background-color: #C6DEF7;
  }

  ${({ selected }) => selected && `
    border: 1.5px solid #3B74EC;
    background-color: #C6DEF7;
  `}
`;

const StackName = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;


const NewMemberInfo2 = () => {
  const navigate = useNavigate();

  // 직업&연차
  const [inputJob, setInputJob] = useState("");
  const [inputCareerYear, setInputCareerYear] = useState("");
  const [careerYearDisabled, setCareerYearDisabled] = useState(true);

  // 기술스택 
  const [techStacks, setTechStacks] = useState([]);
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // 팝업
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpText, setPopUpText] = useState("");
  const closePopUp = () => {
    setPopUpOpen(false);
  };

  // 직업 선택
  const onChangeJob = (e) => {
    const job = e.target.value;
    setInputJob(job);
    console.log(inputJob);
    // 연차 셀렉트박스 활성화
    if (job === "풀스택" || job === "백엔드" || job === "프론트엔드") {
      setCareerYearDisabled(false);
    } else {
      setCareerYearDisabled(true);
      setInputCareerYear("");
    }
  }
  // 연차 선택
  const onChangeCareerYear = (e) => {
    setInputCareerYear(e.target.value);
    console.log(inputCareerYear);
  }

  useEffect(() => {
    const fetchAllTechStacks = async () => {
      try{
        const response = await AccountAxiosApi.allTechStacks();
        setTechStacks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("전체 기술스택 불러오기 에러 😰", error);
      }
    };
    fetchAllTechStacks();
  }, []);


  // 검색어에 따른 결과 업데이트
  useEffect(() => {
    const results = techStacks.filter((item) =>
      item.stackName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, techStacks]);

  // 검색어 입력을 처리
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTechStackClick = (stackNum) => {
    setSelectedStacks(prevSelectedStacks => {
      if (prevSelectedStacks.includes(stackNum)) {
        console.log('❌중복');
        return prevSelectedStacks.filter(num => num !== stackNum);
      } else {
        console.log(prevSelectedStacks);
        setSearchTerm("");
        return [...prevSelectedStacks, stackNum];
      }
    });
  };



  // '이전' 버튼
  const handlePrevButtonClick = () => {
    navigate('/join/step2');
  }
  // '다음' 버튼
  const handleNextButtonClick = () => {
    if (inputJob && (careerYearDisabled || inputCareerYear) && selectedStacks.length >= 1) {
      console.log('job:', inputJob);
      console.log('year:', inputCareerYear);
      console.log('techstacks:', selectedStacks)
      navigate('/join/step4')
    } else {
      console.log("모든 필드 입력 요망")
      setPopUpOpen(true);
      setPopUpText("모든 필드를 입력!!!하세요!! 🥹")    }
  };
  

  return(
    <ParentWrapper width="40">
      <InnerWrapper width="60" gap="20">
        <FlexRowWrapper gap="10">
          <FormControl sx={{ minWidth: 80 }} size="small">
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

          <FormControl sx={{ minWidth: 80 }} size="small">
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
        </FlexRowWrapper>

        <FlexRowWrapper>
          <FlexColumnWrapper gap="10">
            <TextField 
                  size="small"
                  label="기술스택" 
                  value={searchTerm} 
                  onChange={handleChange} 
                  placeholder="예) oracle" 
                  required 
                  InputProps={{ sx: { borderRadius: 4 } }} 
                /> 
            <ResultField>
            {searchTerm ?
              searchResults.map((techStack) => (
                <SingleTechStack 
                  key={techStack.stackNum}
                  selected={selectedStacks.includes(techStack.stackNum)}
                  onClick={() => handleTechStackClick(techStack.stackNum)}
                >
                  <img src={techStack.stackIconUrl} alt={techStack.stackName}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "40%",  
                    }}
                  />
                  <StackName>{techStack.stackName}</StackName>
                </SingleTechStack>
              ))
              :
              techStacks.slice(0,5)
              // .concat(techStacks.filter((techStack) => selectedStacks.includes(techStack.stackNum)))
              .map((techStack) => (
                <SingleTechStack
                  key={techStack.stackNum}
                  selected={selectedStacks.includes(techStack.stackNum)}
                  onClick={() => handleTechStackClick(techStack.stackNum)}
                >
                      <img src={techStack.stackIconUrl} alt={techStack.stackName}
                          style={{
                              width: 30,
                              height: 30,
                              borderRadius: "40%",  
                          }}
                      />
                      <StackName>{techStack.stackName}</StackName>
                  </SingleTechStack>
                  
              ))
            }
            </ResultField>
          </FlexColumnWrapper>
        </FlexRowWrapper>


      </InnerWrapper>
      <ButtonWrapper>
        <JoinButton onClick={handlePrevButtonClick}>이전</JoinButton>
        {inputJob && (careerYearDisabled || inputCareerYear) && selectedStacks.length >= 1 ? (
          <JoinButton
            onClick={handleNextButtonClick}
            sx={{ 
              backgroundColor:"#3B74EC",
              color: "#E5E7EA",
              fontWeight: "bold",
            }}
          >   
            다음
          </JoinButton>
        ) : (
          <JoinButton
          onClick={handleNextButtonClick}
          sx={{ 
            backgroundColor:"#E5E7EA",
            color: "#1E2B4D",
              "&:hover": { 
                backgroundColor: "#E5E7EA",
                // color: "#E5E7EA"
                }
            }}
          >
            다음
          </JoinButton>
      )}
      </ButtonWrapper>

      {/* 모든 필드 입력요망 팝업 */}
      <PopUp open={PopUpOpen} close={closePopUp} header="❗️">{PopUpText}</PopUp>
    </ParentWrapper>
  );
}
export default NewMemberInfo2;