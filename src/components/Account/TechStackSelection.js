import React, { useState, useEffect } from 'react';
import AccountAxiosApi from '../../api/AccountAxiosApi';
import styled from 'styled-components'
import { TextField } from '@mui/material';


const ParentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    width: 80%;
  }
  .input_container {
    /* margin: 0 auto; */
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
    width: 80%;
  }
  }
`;

// const InputFieldWrapper = styled.div`
//   width: 80%;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;

//   @media (max-width: 768px) {
//   width: 100%;
//   }
// `;

const ResultField = styled.div`
  width: 100%;
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


const TechStackSelection = () => {
  const [techStacks, setTechStacks] = useState([]);
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


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

  // 검색어에 따른 결과를 업데이트합니다.
  useEffect(() => {
    const results = techStacks.filter((item) =>
      item.stackName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, techStacks]);

  // 검색어 입력을 처리합니다.
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTechStackClick = (stackNum) => {
    if (selectedStacks.includes(stackNum)) {
      setSelectedStacks(prevSelectedStacks => prevSelectedStacks.filter(num => num !== stackNum));
      console.log('❌중복')
    } else {
      setSelectedStacks(prevSelectedStacks => [...prevSelectedStacks, stackNum]);
      console.log(selectedStacks);
    }
  };

  return (
    <ParentWrapper>
      <div className='input_container'>
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
          techStacks.slice(0, 6).map((techStack) => (
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
      </div>
  </ParentWrapper>
  );
};
export default TechStackSelection;
