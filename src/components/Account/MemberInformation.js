import { useState, useEffect } from 'react';
import AccountAxiosApi from '../../api/AccountAxiosApi';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  color: #191F28;
}
`;

const ParentContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  border-radius: 30px;
  box-shadow: 1px 1px 3px 1px #C6DEF7;
  @media screen and (max-width: 768px) {
    gap: 5px;
  }
  `;

const MemberInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .for_media{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    .for_media {
      align-items: flex-start;
      justify-content: center;
      gap: 5px;
    }
  }
`;

const StyledDiv = styled.div`
  align-self: center;
`;

const PfImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #C6DEF7;
  align-self: center;
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 130px;
    border: 4px solid #C6DEF7;
  }
`;

const GradeIcon = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  margin-top: 145px;
  margin-left: -75px;
  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
    margin-top: 95px;
    margin-left: -40px;
  }
`;

const Content = styled.p`
  text-align: center;
  font-weight: bold;
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(229, 231, 234, 0.2); 
    @media screen and (max-width: 768px) {
      padding: 5px;
      background-color: rgba(229, 231, 234, 0.2);
  }
`;

const TechStackContainer = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-align: center;
  padding: 5px;
  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 5px;
    align-items: flex-start;
    justify-content: flex-start;
}
`;

const TechStackIcon = styled.img`
  width: 40px;
  @media screen and (max-width: 768px) {
    width: 30px;
  }
`;

const StyledLink = styled.a`
font-size: 0.9rem;
color: #1E2B4D;
align-self: flex-end;
&:hover {
  font-weight: bold;
}
`;

const MemberInformation = ({ userMemberNum, updateCounter }) => {
  const [memberInfo, setMemberInfo] = useState([]);
  const [memberTechStackInfo, setMemberTechStackInfo] = useState([]);

  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const userInfoResponse = await AccountAxiosApi.memberInfo(token);
        const userData = JSON.stringify(userInfoResponse, null, 2);
        const userDataObject = JSON.parse(userData);

        setMemberInfo(userDataObject.data[0]);
        console.log("🍎 : " + userDataObject.data[0].pfImg);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchMemberTechStackInfo = async() => {
      try {
        const response = await AccountAxiosApi.getMemberTechStackInfo(userMemberNum);
        setMemberTechStackInfo(response);
      } catch(error) {
        console.error(error);
      }
    };
    fetchMemberInfo();
    fetchMemberTechStackInfo();
  }, [userMemberNum, updateCounter]);

  return (
    <ParentContainer>
    <GlobalStyle />
      
        <MemberInfoContainer>
          <StyledDiv>
            <PfImg src={memberInfo.pfImg} alt="Profile Image" />
            <GradeIcon src={memberInfo.gradeIconUrl} alt="gradeIcon" />
          </StyledDiv>
          <MemberInfoContainer className='for_media'>
            <Content> {memberInfo.nickname}</Content>
            <Content>Since {memberInfo.regDate}</Content>
            <Content>{memberInfo.email}</Content>
            <Content>
            {memberInfo.job}{memberInfo.year !== 0 && ` ${memberInfo.year}년차`}
            </Content>
          </MemberInfoContainer>
        </MemberInfoContainer>
      <TechStackContainer>
        {memberTechStackInfo.map((techstack) => (
          <TechStackIcon 
            key={techstack.stackNum} 
            src={techstack.stackIconUrl} 
            alt={techstack.stackName} />
        ))}
      </TechStackContainer>
      <StyledLink><Link to='/mypage/edit'>내 정보 수정</Link></StyledLink>
    </ParentContainer>
  );
};

export default MemberInformation;
