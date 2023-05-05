import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserInfo';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import ChatAxiosApi from '../../api/ChatAxiosApi';
import { ChatContext } from '../../context/ChatInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Text = styled.div`
  font-size: 4em;
  font-weight: bolder;
  color: #1E2B4D;
`;

const MemberContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const PfImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 8px solid #C6DEF7;
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    border: 4px solid #c6def7;
  }
`;

const Nickname = styled.div`
  font-size: 2em;
  font-weight: lighter;
  @media screen and (max-width: 768px) {
    font-size: 1.3em;
    font-weight: 400;
  }
`;

const ButtonContainer = styled.div`
  margin: 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;
  @media screen and (max-width: 768px) {
    gap: 20px;
    margin: 20px 0;
  }
`;

const Button = styled.a`
  display: block;
  position: relative;
  float: left;
  width: 230px;
  height: 100px;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #FFF;
  border-radius: 10px;
  transition: all 0.2s;
  background: ${props => props.lightBlue ? '#3B74EC' : ''};
  box-shadow: ${props => props.push && props.lightBlue ? '0px 8px 0px 0px #002E96' : ''};
  font-size: 2em;
  &:hover {
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: ${props => props.push && props.lightBlue ? '0px 0px 0px 0px #002E96' : ''};
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 60px;
    font-size: 1.5em;
    line-height: 60px;
  }
`;

const MatchResult = () => {
  const { setChatNumber } = useContext(ChatContext);
  // 🚀 3. Start 컴포넌트에서 저장한 UserContext 가져오기
  const { mentorNickname, mentorPfImg, menteeNickname, menteePfImg, menteeNum, mentorNum } = useContext(UserContext);

  const navigate = useNavigate();
  const ReturnButtonClick = () => {
    navigate('/mentor');
  };

  const saveChatRoom = async() => {
    try {
      const response = await ChatAxiosApi.saveChatRoom(mentorNum, menteeNum);
      console.log(response.data);
      setChatNumber(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const ChatButtonClick = async () => {
    await saveChatRoom();
    navigate('/chat');
  }
  return (
    <>
      <Box sc={{ width: '40%' }}>
        <LinearProgress />
      </Box>
      <Container>
        <Text>🎉 매칭 성공 🎉</Text>
        <MemberContainer>
          <MemberInfo>
            <PfImg
              src={menteePfImg}
              alt="MentorProfile"
            />
            <Nickname>{menteeNickname}</Nickname>
          </MemberInfo>
          <MemberInfo>
            <PfImg
              src={mentorPfImg}
              alt="MentorProfile"
            />
            <Nickname>{mentorNickname}</Nickname>
          </MemberInfo>
        </MemberContainer>
        <ButtonContainer>
          <Button push lightBlue onClick={ChatButtonClick}>대화하기</Button>
          <Button push lightBlue onClick={ReturnButtonClick}>돌아가기</Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default MatchResult;