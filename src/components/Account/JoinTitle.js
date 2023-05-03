import styled from 'styled-components';

const StyledJoinTitle = styled.h1`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #191F28;

  @media (max-width: 768px) {
  }
`;

const JoinTitle = ({ children }) => {

  return(
    <StyledJoinTitle>
      {children}
    </StyledJoinTitle>
  );
}

export default JoinTitle;
