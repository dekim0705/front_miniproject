import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';
import { ChatContext } from '../../context/ChatInfo';
import ChatAxiosApi from '../../api/ChatAxiosApi';
import PopUp from '../../util/PopUp';

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
    width: 90%;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const NicknameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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

const ExitButton = styled(LogoutIcon)`
  color: #1E2B4D;
  cursor: pointer;
`;

const ChatUserInfo = () => {
  const { otherUserNumber, chatRoom } = useContext(ChatContext);
  const [userInfo, setUserInfo] = useState([]);
  const [PopUpOpen, setPopUpOpen] = useState(false);
  const closePopUp = () => {
    setPopUpOpen(false);
  };
  const navigate = useNavigate();

  const handleExitChat = async () => {
    try {
      await ChatAxiosApi.deleteChatMessages(chatRoom);
      await ChatAxiosApi.deleteChatRoom(chatRoom);
      setPopUpOpen(false);
      navigate('/');
    } catch(error) {
      console.log(error);
    }
  };

  // 📍 채팅 상대 회원 정보 가져오기(detail)
  useEffect(() => {
    const chatUserInfo = async (memberNum) => {
      const response = await ChatAxiosApi.userDetails(memberNum);
      setUserInfo(response.data);
    };
    chatUserInfo(otherUserNumber);
  }, [otherUserNumber]);

  return (
      <ChatUserInfoContainer>
        <DetailContainer>
          <img
            src={userInfo.pfImg}
            alt="Profile"
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%"
            }}
          />
          <NicknameContainer>
            <img
              src={userInfo.gradeIconUrl}
              alt='gradeBadge'
              style={{
                width: 30,
                height: 30
              }}
              />
            <Nickname>{userInfo.nickname}</Nickname>
          </NicknameContainer>
          <TechStacksContainer>
            {
              userInfo.stackIconUrls &&
                userInfo.stackIconUrls.map((stackIconUrl, index) => (
                  <TechStack key={index}>
                    <img
                      src={stackIconUrl}
                      alt='stack Icon'
                      style={{
                        width: 30,
                        height: 30
                      }}
                    />
                  </TechStack>
                ))
            }
          </TechStacksContainer>
          <JobContainer>
            <Job>{userInfo.job}</Job>
            <Year>{userInfo.year}년차</Year>
          </JobContainer>
        </DetailContainer>
        <ChatButtonContainer>
          <ExitButton
            sx={{ fontSize: "2.5rem" }}
            onClick={() => setPopUpOpen(true)}  
          />
          <PopUp
            open={PopUpOpen}
            close={closePopUp}
            typeExit={true}
            header="대화 종료"
            confirm={handleExitChat}>
              대화 종료시 모든 데이터가 사라집니다.
              종료하시겠습니까?
          </PopUp>
        </ChatButtonContainer>
      </ChatUserInfoContainer>
  );
};

export default ChatUserInfo;