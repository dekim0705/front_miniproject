import React, { useState, useEffect } from "react";
import AccountAxiosApi from "../../api/AccountAxiosApi";
import { FlexColumnWrapper } from "./Wrappers";
import AccountPopUp from "../../util/AccountPopUp";
import { TextField } from "@mui/material";
import styled from "styled-components";
// import { InfoSectionContainer } from "./MemberEditInformation";

const ResultField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 65%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
      width: 90%;
  }
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


const EditTechStacks = ({ userMemberNum, setUpdateCounter, currentMemberInfo }) => {
  const [techStacks, setTechStacks] = useState([]);
  const [selectedStacks, setSelectedStacks] = useState(
        currentMemberInfo[0].techStacks.map((stack) => stack.stackNum));
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpText, setPopUpText] = useState("");

    // 기술스택 불러오기
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
    }, [selectedStacks]);
  
  
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
  
    const handleTechStackClick = async (stackNum) => {
      if (selectedStacks.includes(stackNum)) {
        // 기술스택 삭제 : 이미 선택된 기술스택을 클릭한 경우 
        try {
          console.log('삭제될 스택번호 :', stackNum)
          await AccountAxiosApi.deleteStack(userMemberNum, stackNum);
          setSelectedStacks((prevSelectedStacks) => prevSelectedStacks.filter(num => num !== stackNum));
          setPopUpOpen(true);
          setPopUpText(`기술 스택이 삭제되었습니다. 😢`);
          setUpdateCounter((prevCounter) => prevCounter + 1);
  
        } catch (error) {
          console.log('❌ 기술스택 삭제 실패:', error);
        }
      } else {
        // 기술스택 추가 : 새로운 기술스택을 선택한 경우
        try {
          console.log('추가될 스택번호 :', stackNum)
  
          await AccountAxiosApi.addStack(userMemberNum, stackNum);
          setSelectedStacks((prevSelectedStacks) => [...prevSelectedStacks, stackNum]);
          setPopUpOpen(true);
          setPopUpText(`기술 스택이 추가되었습니다. 😊`);
          setUpdateCounter((prevCounter) => prevCounter + 1);
        } catch (error) {
          console.log('❌ 기술스택 추가 실패:', error);
        }
      }
    };


  return(
    <>
        <FlexColumnWrapper gap="15">
          <ResultField>
              <TextField 
                size="small"
                label="기술스택 검색" 
                value={searchTerm} 
                onChange={handleChange} 
                placeholder="예) oracle" 
                required 
                InputProps={{ sx: { borderRadius: 4, width: 200 } }} 
                sx = {{alignSelf: "flex-start" }}
              /> 
          </ResultField>
          <ResultField>
            {searchTerm ?
              searchResults.map((techStack) => (
                <SingleTechStack 
                  key={techStack.stackNum}
                  selected={selectedStacks.includes(techStack.stackNum)}
                  onClick={() => handleTechStackClick(techStack.stackNum)}
                >
                  <img 
                    src={techStack.stackIconUrl} 
                    alt={techStack.stackName}
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
              techStacks.slice(0,10)
              // .concat(techStacks.filter((techStack) => selectedStacks.includes(techStack.stackNum)))
              .map((techStack) => (
                <SingleTechStack
                  key={techStack.stackNum}
                  selected={selectedStacks.includes(techStack.stackNum)}
                  onClick={() => handleTechStackClick(techStack.stackNum)}
                >
                  <img 
                    src={techStack.stackIconUrl} 
                    alt={techStack.stackName}
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
      <AccountPopUp 
        open={PopUpOpen} 
        close={() => setPopUpOpen(false)} 
        header="❗️" 
        closeText="확인">
          {PopUpText}
      </AccountPopUp>
    </>
  );
}
export default EditTechStacks;