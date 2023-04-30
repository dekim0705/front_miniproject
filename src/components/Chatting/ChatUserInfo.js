import React from 'react';
import styled from 'styled-components';

const ChatUserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 80vh;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 30px;
  padding: 20px;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const PfImg = styled.div`
  width: 150px;
  height: 150px;
  background-color: blue;
  border-radius: 50%;
`;

const IsOnline = styled.div`
  color: green;
  font-weight: bold;
`;

const NicknameContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Grade = styled.div`
  font-weight: bold;
  color: #777;
`;

const Nickname = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`;

const TechStacksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;

const TechStack = styled.p`
  font-size: 1em;
  font-weight: bold;
`;

const JobContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Job = styled.div`
  font-weight: bold;
  font-size: 1.1em;
`;

const Year = styled.div`
  font-weight: bold;
  font-size: 1.1em;
`;

const ChatButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const MinimizeButton = styled.div`
  font-weight: bold;
  color: #777;
`;

const ExitButton = styled.div`
  font-weight: bold;
  color: #777;
`;

export const ChatUserInfo = () => {
  return (
      <ChatUserInfoContainer>
        <DetailContainer>
          <PfImg />
          <IsOnline>online</IsOnline>
          <NicknameContainer>
            <Grade>ff</Grade>
            <Nickname>양갱좋아</Nickname>
          </NicknameContainer>
          <TechStacksContainer>
            <TechStack>Java</TechStack>
            <TechStack>SpringBoot</TechStack>
            <TechStack>JavaScript</TechStack>
          </TechStacksContainer>
          <JobContainer>
            <Job>백엔드</Job>
            <Year>3년차</Year>
          </JobContainer>
        </DetailContainer>
        <ChatButtonContainer>
          <MinimizeButton>dd</MinimizeButton>
          <ExitButton>ff</ExitButton>
        </ChatButtonContainer>
      </ChatUserInfoContainer>
  );
};

export default ChatUserInfo;