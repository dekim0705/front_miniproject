import { useState, useEffect } from 'react';
import styled from "styled-components";
import AccountAxiosApi from '../../api/AccountAxiosApi';
import Accordion from './Accordion';
import EditProfileImage from './EditProfileImage';
import EditNickname from './EditNickname';
import EditPwd from './EditPwd';
import EditJobYear from './EditJobYear';
import EditTechStacks from './EditTechStacks';
import WithdrawnButton from './WithdrawnButton';

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

export const HintWrapper = styled.div`
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

  export const InfoSectionContainer = styled.div`
    /* border: 0.1rem solid #E5E7EA ; */
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin-left: 30px; */
    @media screen and (max-width: 768px) {
      width: 100%;
      align-items: stretch;
      margin-left: 30px;
    }
  `;

const MemberEditInformation = ({ userMemberNum, setUpdateCounter }) => {
  const [currentMemberInfo, setCurrentMemberInfo] = useState([]);

  // 현재 회원 정보 호출
  useEffect(() => {
    const fetchMemberCurrentInfo = async () => {
      try {
        const response = await AccountAxiosApi.getMemberCurrentInfo(userMemberNum);
        console.log('현재 회원 정보 : ', response);
  
        if (response) { 
          const updatedTechStacks = response.techStacks.map((stack) => ({
            ...stack,
            memberNum: userMemberNum,
          }));
          const updatedMemberInfo = {
            ...response,
            techStacks: updatedTechStacks,
          };
          setCurrentMemberInfo([updatedMemberInfo]); // 배열로 설정
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchMemberCurrentInfo();
  }, [userMemberNum]);





  return (
  <>
    <ParentContainer>
      <Accordion 
        title="프로필 사진 변경" 
        content={
          <EditProfileImage 
            userMemberNum={userMemberNum} 
            currentMemberInfo={currentMemberInfo} 
            setUpdateCounter={setUpdateCounter}
          />
        }>
      </Accordion>
      <Accordion 
        title="닉네임 변경" 
        content={
          <EditNickname 
            userMemberNum={userMemberNum} 
            currentMemberInfo={currentMemberInfo} 
            setUpdateCounter={setUpdateCounter} 
          />
        }>
      </Accordion>
      <Accordion 
        title="비밀번호 변경" 
        content={
          <EditPwd 
            userMemberNum={userMemberNum} 
            currentMemberInfo={currentMemberInfo} 
            setUpdateCounter={setUpdateCounter} 
          /> 
        }>
      </Accordion>

      <Accordion 
        title="직업 변경" 
        content={
          <EditJobYear 
            userMemberNum={userMemberNum} 
            currentMemberInfo={currentMemberInfo} 
            setUpdateCounter={setUpdateCounter}
          />
        }>
      </Accordion>

      <Accordion 
        title="기술스택 변경" 
        content={
          <EditTechStacks
            userMemberNum={userMemberNum} 
            currentMemberInfo={currentMemberInfo} 
            setUpdateCounter={setUpdateCounter}
          />
        }>
      </Accordion>
    </ParentContainer>
    <WithdrawnButton userMemberNum={userMemberNum} />
  </>
  );
};
export default MemberEditInformation;
