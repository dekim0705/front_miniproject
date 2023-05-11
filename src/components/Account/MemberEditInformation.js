import { useState, useEffect, useContext } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import styled from "styled-components";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../../firebase";
import AccountAxiosApi from '../../api/AccountAxiosApi';
import { FlexColumnWrapper, FlexRowWrapper } from "./Wrappers";
import PopUp from "../../util/PopUp";
import { UserContext } from "../../context/UserInfo";


const ParentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 3px 1px #C6DEF7;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const HintWrapper = styled.div`
  margin-left: 10px;
  font-size: 0.7rem;
  color:#999;
  .success {
    color: #3b74ec;
  }
  .error {
    color: red;
  }
`;

const ResultField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-left: 30px;
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

  const InfoSectionContainer = styled.div`
    /* border: 0.1rem solid #E5E7EA ; */
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
    gap: 20px;
    @media screen and (max-width: 768px) {
      width: 100%;
  }
  `;

  const SectionTitle = styled.h1`
    font-size: 1.5rem;
    color: #1E2B4D;
    align-self: flex-start;
  `;

  const ProfileImageSection = styled.div`
    display: flex;
    justify-content: center;

  `;
  const SelectImageSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-end;
  `;

const MemberEditInformation = ({ userMemberNum }) => {
  const navigate = useNavigate();
  const [currentMemberInfo, setCurrentMemberInfo] = useState([]);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword]  = useState('');
  const [job, setJob] = useState('');
  const [year, setYear] = useState('');
  const [yearDisabled, setYearDisabled] = useState(true);

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

    // 힌트메세지
    const [nicknameMessage, setNicknameMessage] = useState("");
    const [pwdMessage, setPwdMessage] = useState ("");
    const [conPwdMessage, setConPwdMessage] = useState("");
    
    // 유효성 검사(?
    const [isNickname, setIsNickname] = useState(false);
    const [isPwd, setIsPwd] = useState(false);
    const [isConPwd, setIsConPwd] = useState(false);

  // 현재 회원 정보 호출
  useEffect(() => {
    const fetchMemberCurrentInfo = async () => {
      try {
        const response = await AccountAxiosApi.getMemberCurrentInfo(userMemberNum);
        console.log('현재 회원 정보 : ', response);
  
        if (response) {
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
  
          // 회원이 현재 선택한 기술스택을 반영
          const selectedStacks = response.techStacks.map((stack) => stack.stackNum);
          setSelectedStacks(selectedStacks);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchMemberCurrentInfo();
  }, [userMemberNum, setSelectedStacks]);
  

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // 이메일 수정 일단 금지


  // 닉네임 변경
  const onChangeNickname = (e) => {
    const nicknameRegex = /^(?=.*[a-zA-Z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
    const nicknameCurrent = e.target.value;
    setNickname(nicknameCurrent);
    if(!nicknameRegex.test(nicknameCurrent) || nicknameCurrent.length === 0) {
      setNicknameMessage("2~10자의 닉네임을 입력해주세요. (한글, 영문, 숫자 사용 가능)");
      setIsNickname(false);
      // setInputPwd("");
      // setInputPwdDisabled(true);
    } else {
      setNicknameMessage("닉네임 중복확인을 해주세요.");
      setIsNickname(true);
    }
  }

    // 비밀번호 변경
    // 🔑 비밀번호 정규식 : 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
    const onChangePwd = (e) => {
      const pwdRegex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
      const pwdCurrent = e.target.value;
      setPassword(pwdCurrent);
      if(!pwdRegex.test(pwdCurrent)) {
        setPwdMessage(`숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.`)
        setIsPwd(false);
      } else {
        setPwdMessage("올바른 형식 입니다.");
        setIsPwd(true);
      }
    }
  
    // 비밀번호 확인
    const onChangeConPwd = (e) => {
      const conPwdCurrent = e.target.value;
      setConPassword(conPwdCurrent)
      if (conPwdCurrent !== password) {
        setConPwdMessage('비밀번호가 일치하지 않습니다.')
        setIsConPwd(false)
      } else {
        setConPwdMessage('비밀번호가 일치 합니다.')
        setIsConPwd(true);
      }
    }

    // 직업 변경 
  const onChangeJob = (e) => {
    const job = e.target.value;
    setJob(job);
    console.log(job);
    // 연차 셀렉트박스 활성화
    if (job === "풀스택" || job === "백엔드" || job === "프론트엔드") {
      setYearDisabled(false);
    } else {
      setYearDisabled(true);
      setYear(0); // 연차 0으로 들어감
    }
  }
  // 연차 선택
  const onChangeCareerYear = (e) => {
    setYear(e.target.value);
    console.log(year);
  }
  
  
  // 닉네임 중복 확인
  const onClickNicknameDoubleCheck = async() => {
    console.log("Click -> 닉네임 중복확인");
    // 가입 여부 우선 확인
    const memberCheck = await AccountAxiosApi.memberRegCheck(nickname);
    console.log("닉네임 중복여부 확인: ", memberCheck.data);

    // 닉네임 중복 여부 확인 후 팝업 창 
    if(memberCheck.data === true) {
      setPopUpOpen(true);
      setPopUpText("🙆🏻‍♀️ 사용 가능한 닉네임 입니다.");
      setNicknameMessage('사용 가능한 닉네임 입니다.');
      // setInputPwdDisabled(false);
    } else {
      setPopUpOpen(true);
      setPopUpText(`🙅🏻‍♀️ '${nickname}' 은(는) 이미 사용중인 닉네임 입니다.`);
      setNickname(''); // 인풋 창 초기화
      // setInputPwdDisabled(true);
    }
  }

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
        console.log('✔️ 기술스택 삭제 성공');
      } catch (error) {
        console.log('❌ 기술스택 삭제 실패:', error);
      }
    } else {
      // 기술스택 추가 : 새로운 기술스택을 선택한 경우
      try {
        console.log('추가될 스택번호 :', stackNum)

        await AccountAxiosApi.addStack(userMemberNum, stackNum);
        setSelectedStacks((prevSelectedStacks) => [...prevSelectedStacks, stackNum]);
        console.log('✔️ 기술스택 추가 성공');
      } catch (error) {
        console.log('❌ 기술스택 추가 실패:', error);
      }
    }
  };

  // 기술스택 삭제/추가 후 메인 다녀오기..
  const navigationTrick = () => {
    navigate("/");
    setTimeout(() => {
      navigate("/mypage/edit");
    }, 10);   
  }

  // 회원정보 수정
  const updateMemberInfo = async () => {
    try {
      const memberInfo = {
        memberNickname: nickname,
        memberPwd: password,
        memberJob: job,
        memberYear: year,
        memberTechStacks: selectedStacks,
      };

      const response = await AccountAxiosApi.updateMemberInfo(userMemberNum, memberInfo);
      console.log("회원정보 수정 성공: ", response);

    } catch (error) {
      console.log("회원정보 수정 실패: ", error);
    }
  };
  
  // 프로필 사진 업로드
  const [imageUpload, setImageUpload] = useState(null)
  const [imageUrl, setImageUrl] = useState("");
  const upload = () => {
    if (imageUpload === null) {
    console.log("선택된 이미지가 없습니다.");
    return;
    }
    const imageRef = ref(storage, `images/${userMemberNum}_${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      console.log('업로드 됨!');// 업로드 되자마자 뜨게 하기
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
      }); 
      console.log(userMemberNum,imageUrl);


      });
  };

  // 업로드 된 사진 바로 적용하기 위한 useContext
  const { setUserPfImgUrl } = useContext(UserContext);

  // 업로드된 프로필사진 db에 저장
  const changeImg = async() => {
    try {
      console.log("정보: ", imageUrl, userMemberNum);
      const mediaIndex = imageUrl.indexOf("alt=media");
      const extractedUrl = imageUrl.substring(0, mediaIndex + 9); //  "alt=media" 포함(9글자)
      
      console.log(extractedUrl);    
      setImageUrl(extractedUrl);  
      await AccountAxiosApi.updatePfImg(extractedUrl, userMemberNum);
      setImageUpload(imageUrl);
      console.log('프로필사진 변경 성공');
      setUserPfImgUrl(imageUrl) //  
    } catch (error) {
      console.error(error);
      console.log('프로필사진 변경 실패');
    }
  };
  
  // 회원탈퇴 (업데이트) 완료
  // 탈퇴 후 로그아웃 구현 X
  const updateMemberIsWithdrawn = async({ isLogin }) => {
    try{
      const response = await AccountAxiosApi.updateMemberIsWithdrawn(userMemberNum);
      console.log("회원탈퇴(업데이트) 완료", response);

    } catch (error) {
      console.log("회원탈퇴 실패");
    }
  }

  return (
  <>
    <ParentContainer>
      <InfoSectionContainer>
        <SectionTitle>프로필 사진 수정</SectionTitle>
        <ProfileImageSection>
          {!imageUrl && currentMemberInfo.map((currentInfo) => (
            <div key={currentInfo.memberNum}>
              <img src={currentInfo.pfImg} alt="profile" style={{width:150, height:150, borderRadius:100}}/>
            </div>
          ))}
          {imageUrl && <img src={imageUrl} alt="UploadedImage" style={{width:150, height:150, borderRadius:100}}/>} 
        <SelectImageSection>
          <Button  component="label">사진 선택
          <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]);}} hidden accept="image/*" multiple />
          </Button>
          <Button onClick={upload} >선택한 사진 확인</Button>
      </SelectImageSection>
      </ProfileImageSection>
        <Button onClick={changeImg} variant="contained" sx={{borderRadius:20, fontWeight:"bold", alignSelf:"flex-end"}}>프로필 사진 변경</Button>
      </InfoSectionContainer>
      
      <InfoSectionContainer>
        <SectionTitle>기본 정보 수정</SectionTitle>
        <FlexColumnWrapper >
        <FlexRowWrapper gap="10">
          <TextField 
            size="small" 
            label="닉네임" 
            value={nickname} 
            onChange={onChangeNickname} 
            placeholder="닉네임을 입력하세요" 
            required 
            InputProps={{ sx: { borderRadius: 4 } }} 
          /> 
          {nickname ? (
            <Button onClick={onClickNicknameDoubleCheck} variant="outlined" type="button" size="small" sx={{borderRadius: 4}}>
              중복확인
            </Button>
          ) : (
            <Button type="button" size="small" sx={{color: '#ffffff', position: 'fixed'}}>
              중복확인
            </Button>
          )}
        </FlexRowWrapper>
        <HintWrapper> 
          {nickname.length > 0 && <span className={`message ${isNickname ? 'success' : 'error'}`}>{nicknameMessage}</span>} 
        </HintWrapper>
      </FlexColumnWrapper>
      <FlexColumnWrapper gap="20">
        <div className="pwd_input">
          <TextField 
            size="small" 
            type="password"
            label="비밀번호"
            value={password}
            onChange={onChangePwd}
            placeholder="비밀번호를 입력하세요"
            required 
            // disabled={inputPwdDisabled}
            InputProps={{ sx: { borderRadius: 4 } }} 
          />
          <HintWrapper> 
            {password.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>} 
          </HintWrapper>
        </div>
        <div className="con_pwd_input">
          <TextField 
            size="small"
            type="password" 
            label="비밀번호 확인" 
            value={conPassword} 
            onChange={onChangeConPwd} 
            placeholder="비밀번호를 다시 입력하세요" 
            required 
            InputProps={{ sx: { borderRadius: 4 } }} 
          />
          <HintWrapper> 
            {conPassword.length > 0 && <span className={`message ${isConPwd ? 'success' : 'error'}`}>{conPwdMessage}</span>} 
          </HintWrapper>
        </div>
      </FlexColumnWrapper>
      <TextField 
        size="small" 
        label="이메일주소" 
        value={email} 
        // onChange={handleEmailChange} 
        placeholder="이메일주소를 입력하세요" 
        disabled 
        InputProps={{ sx: { borderRadius: 4, width: 200 } }} 
      />
        
      <FlexRowWrapper gap="20">
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
        </FlexRowWrapper>
        <Button onClick={updateMemberInfo} variant="contained" sx={{borderRadius:20, fontWeight:"bold", alignSelf:"flex-end"}}> 내 정보 수정 </Button>
      </InfoSectionContainer>
  
      <InfoSectionContainer>
        <SectionTitle>기술스택 수정</SectionTitle>
          <TextField 
            size="small"
            label="기술스택 검색" 
            value={searchTerm} 
            onChange={handleChange} 
            placeholder="예) oracle" 
            required 
            InputProps={{ sx: { borderRadius: 4, width: 200 } }} 
          /> 
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
            <Button 
              onClick={navigationTrick} 
              variant="contained" 
              sx={{borderRadius:20, fontWeight:"bold", alignSelf:"flex-end"}}> 
              내 기술스택 수정 
            </Button>
      </InfoSectionContainer>
  
    </ParentContainer>
        
    <Button onClick={updateMemberIsWithdrawn} sx={{alignSelf:"flex-end"}}>  회원 탈퇴 </Button>
    <PopUp open={PopUpOpen} close={closePopUp} header="❗️">{PopUpText}</PopUp>

  </>
  );
};
export default MemberEditInformation;
