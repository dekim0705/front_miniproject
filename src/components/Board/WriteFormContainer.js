import React from 'react';
// import CategorySelect from './CategorySelect';
import TitleInput from './Title';
import ContentInput from './ContentInput';
import styled from 'styled-components';
import TagField from './TagInput';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BoardWrite = () => {
  return (
    <Wrapper>
      <Row>
        <Col>
          <TitleInput />
          <ContentInput />
          <TagField/>

        </Col>
      </Row>
    </Wrapper>
  );
};

export default BoardWrite;
