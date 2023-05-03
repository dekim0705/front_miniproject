import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import JoinButton from "./JoinButton";
import { ParentWrapper, InnerWrapper } from "./JoinWrappers";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Button = styled.a`
  display: block;
  position: relative;
  float: left;
  width: 50%;
  height: 60px;
  padding: 0;
  margin: 0 auto;
  font-weight: 600;
  text-align: center;
  line-height: 60px;
  color: #FFF;
  border-radius: 10px;
  transition: all 0.2s;
  background: ${props => props.lightBlue ? '#3B74EC' : ''};
  box-shadow: ${props => props.push && props.lightBlue ? '0px 8px 0px 0px #002E96' : ''};
  font-size: 1.4em;

  &:hover {
    margin-top: 12px;
    margin-bottom: 2px;
    box-shadow: ${props => props.push && props.lightBlue ? '0px 0px 0px 0px #002E96' : ''};
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    height: 60px;
    font-size: 1.5em;
    line-height: 60px;
  }
`;

const RequestEmail = styled.div`
  text-align: center;
  cursor: pointer;
  text-decoration: underline;
  font-size: 1rem; 

`;

const PrevButtonWrapper = styled.div`
  display: flex;
  align-self: flex-start;
`;

const CompleteMessage = () => {
  const navigate = useNavigate();

  // '이전'버튼
  const handlePrevButtonClick = () => {
    navigate('/join/step3');
  }

  return(
    <ParentWrapper width="40">
      <InnerWrapper width="70" gap="20">
        <Content>
          <h3>입력하신 이메일주소로 <br />메일이 발송되었습니다.</h3>
          <p>회원가입 완료를 위해 <br />메일 속의 링크를 클릭해 주세요.</p>
          <p>입력하신 이메일 주소 : </p>
          <Button push lightBlue>
            이메일 인증
          </Button>

        </Content>
        <RequestEmail>
          <h4>이메일을 받지 못하셨나요?</h4>
        </RequestEmail >
        {/* <Content>
          <p>이메일 주소를 잘못 입력하신 경우,<br />
          '고객문의'로 이메일 주소 수정을 요청해 주시기 바랍니다.</p>
        </Content> */}
      </InnerWrapper>
      <PrevButtonWrapper>
        <JoinButton onClick={handlePrevButtonClick}>
          이전
        </JoinButton>
      </PrevButtonWrapper>
    </ParentWrapper>
  );

}
export default CompleteMessage;