import { useState, useEffect } from 'react';
import AccountAxiosApi from '../../api/AccountAxiosApi';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import styled from "styled-components";


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



const MemberEditInformation = ({ userMemberNum }) => {
  const [currentMemberInfo, setCurrentMemberInfo] = useState([]);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword]  = useState('');
  const [job, setJob] = useState('');
  const [year, setYear] = useState('');
  const [yearDisabled, setYearDisabled] = useState(true);
  const [techStacks, setTechStacks] = useState([]);
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchMemberCurrentInfo = async () => {
      try {
        const response = await AccountAxiosApi.getMemberCurrentInfo(userMemberNum);
        console.log(response);
        console.log(response.data);

        setNickname(response.nickname);
        setEmail(response.email);
        setPassword(response.pwd);
        setJob(response.job);
        setYear(response.year);

  
        const updatedTechStacks = response.techStacks.map((stack) => ({
          ...stack,
          memberNum: userMemberNum,
        }));
        const updatedMemberInfo = {
          ...response,
          techStacks: updatedTechStacks,
        };
        setCurrentMemberInfo([updatedMemberInfo]); // 배열로 설정

         // Set the member's current tech stack selection
 const selectedStacks = response.data.techStacks.map((stack) => stack.stackNum);
 setSelectedStacks(selectedStacks);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchMemberCurrentInfo();
  }, [userMemberNum]);

  
  


  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };
  const handlePwdChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConPwdChange = (e) => {
    setConPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onChangeJob = (e) => {
    setJob(e.target.value);
    console.log(e.target.value);
    // 연차 셀렉트박스 활성화
    if (job === "풀스택" || job === "백엔드" || job === "프론트엔드") {
      setYearDisabled(false);
    } else {
      setYearDisabled(true);
    }
  }
  // 연차 선택
  const onChangeCareerYear = (e) => {
    setYear(e.target.value);
    console.log(year);
  }


  useEffect(() => {
    const fetchAllTechStacks = async () => {
      try{
        const response = await AccountAxiosApi.allTechStacks();
        setTechStacks(response.data);
        setSelectedStacks(selectedStacks);
        // 
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



  return (
    <>
      {currentMemberInfo.map((currentInfo) => (
        <div key={currentInfo.memberNum}>
          {/* <img src={currentInfo.pfImg} alt="profile" /> */}

          <TextField 
              size="small"
              label="닉네임" 
              value={nickname} 
              onChange={handleNicknameChange} 
              placeholder="닉네임을 입력하세요" 
              required 
              InputProps={{ sx: { borderRadius: 4 } }} 
            /> 

            <TextField 
              size="small" 
              type="password"
              label="비밀번호"
              value={password}
              onChange={handlePwdChange}
              placeholder="비밀번호를 입력하세요"
              required 
              InputProps={{ sx: { borderRadius: 4 } }} 
            />
            <TextField 
              size="small"
              type="password" 
              label="비밀번호 확인" 
              value={conPassword} 
              onChange={handleConPwdChange} 
              placeholder="비밀번호를 다시 입력하세요" 
              required 
              InputProps={{ sx: { borderRadius: 4 } }} 
            />

<TextField 
            size="small" 
            label="이메일주소" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="이메일주소를 입력하세요" 
            required 
            InputProps={{ sx: { borderRadius: 4 } }} 
          />


<FormControl sx={{ minWidth: 80 }} size="small">
            <InputLabel>직업</InputLabel>                  
            <Select
              value={job}
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
              value={year || ""}
              label="연차"
              onChange={onChangeCareerYear}
              disabled={yearDisabled}
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

          {/* {currentInfo.nickname} */}
          {/* <img src={currentInfo.gradeIconurl} alt="badge" /> */}
          {/* {currentInfo.nickname}
          {currentInfo.regDate}
          {currentInfo.email}
          {currentInfo.job}
          {currentInfo.year} */}
          {/* {currentInfo.techStacks.map((techStack) => ( */}
            {/* // <div key={techStack.stackNum}> */}
              {/* 기술 스택의 아이콘 정보 표시 */}
             {/* <img src={techStack.stackIconUrl} alt="tech-stack-icon" /> */}
            {/* </div> */}
          {/* ))} */}
        </div>
      ))}
    </>
  );
};
export default MemberEditInformation;
