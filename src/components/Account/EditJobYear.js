import React, { useState } from "react";
import AccountAxiosApi from "../../api/AccountAxiosApi";
import { InfoSectionContainer } from "./MemberEditInformation";
import { FlexRowWrapper } from "./Wrappers";
import AccountPopUp from "../../util/AccountPopUp";
import { Select, MenuItem, InputLabel, FormControl, Button} from '@mui/material';

const EditJobYear = ({ userMemberNum, setUpdateCounter, currentMemberInfo }) => {
  const [job, setJob] = useState(currentMemberInfo[0].job);
  const [year, setYear] = useState(currentMemberInfo[0].year);
  const [yearDisabled, setYearDisabled] = useState(true);
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const [PopUpText, setPopUpText] = useState("");

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
  
    const handleEditJobYear = async() => {
      try {
        const memberNum = userMemberNum;
        const memberJob = job;
        const memberYear = year;
        await AccountAxiosApi.editMemberJobYear(memberJob, memberYear, memberNum);
        setUpdateCounter((prevCounter) => prevCounter + 1); 
        setPopUpText('직업과 연차가 변경되었습니다. 😊')
        setPopUpOpen(true);
      } catch (error) {
        console.error('직업&연차 변경 실패');
      }
    }

  return(
    <>
      <InfoSectionContainer>
        <FlexRowWrapper gap="15">
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
        <AccountPopUp open={PopUpOpen} close={() => setPopUpOpen(false)} header="❗️" closeText="확인">{PopUpText}</AccountPopUp>
        <Button onClick={handleEditJobYear} variant="contained" sx={{borderRadius:20, fontWeight:"bold", alignSelf:"flex-end", marginRight: 4}}>직업 변경</Button>
      </InfoSectionContainer>
    </>
  );
}
export default EditJobYear;