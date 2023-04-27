import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 0.5rem 1rem;
  margin-top : 15px;
  margin-left: 220px;
  margin-bottom : 0 auto;
  background-color: white;
  color : rgba(0, 0, 0, 0.65);
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";

`;

const ImgUploadButton = () => {
  return (
    <StyledButton>파일 업로드</StyledButton>
  );
};

export default ImgUploadButton;
