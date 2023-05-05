import React, { useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserInfo';
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MemberInformation from "../components/Account/MemberInfomation";
import MemberLatestPost from "../components/Account/MemberLatestPost";
import MemberLatestReply from "../components/Account/MemberLatestReply";


const ParentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5%;
  margin: 50px auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    margin: 40px 0;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 30px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
const MemberInfoContainer = styled.div`
  width: 300px;
  @media screen and (max-width: 768px) {
  width: 90%;
}
  `;

const MyProfilePage = () => {
  const navigate = useNavigate();
  const { userNum } = useContext(UserContext);
  const userMemberNum = userNum;

  useEffect(() => {
    if (!userNum) {
      navigate('/login', {replace: true});
    }
  }, [userNum, navigate]);

  return (
    <>
      <Header/>
        <ParentContainer>
          <MemberInfoContainer>
            <MemberInformation userMemberNum={userMemberNum} />
          </MemberInfoContainer>
          <ColumnContainer>
            <MemberLatestPost userMemberNum={userMemberNum} />
            <MemberLatestReply userMemberNum={userMemberNum} />
          </ColumnContainer>
        </ParentContainer>
      <Footer />
    </>
  );
};

export default MyProfilePage;
