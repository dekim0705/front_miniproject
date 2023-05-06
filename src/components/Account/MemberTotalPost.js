import { useState, useEffect } from 'react';
import AccountAxiosApi from '../../api/AccountAxiosApi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pagination from './AccountPagination';
import { Button } from '@mui/material';
import AccountPopUp from '../../util/AccountPopUp';

export const ParentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 1px 1px 3px 1px #C6DEF7;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  & > *:not(:first-child) {
    border-top: 1px solid #E5E7EA;
  }
  & > *:last-child {
    border-bottom: 1px solid #E5E7EA;
  }
  .ellipsis {
    width: 70%;
  }
  .ellipsis_2 {
    width: 80%;
    line-height: 1.2rem;
  }
`;

export const Title = styled.h3`
  align-self: flex-start;
  margin-bottom: 10px;
  padding-top:10px;
`;

export const StyledLink = styled.a`
  padding-top:10px;
  position: absolute;
  font-size: 0.9rem;
  color: #1E2B4D;
  align-self: flex-end;
  text-decoration: underline;
  margin-right: 10px;
  &:hover {
    font-weight: bold;
  }
`;

export const MapTitle = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  margin: 10px 0  5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    text-decoration: underline;
  }
`;

export const ExtraInfo = styled.p`
  text-align: end;
  font-size: 0.8rem;
  font-style: italic;
`;
  
export const NoResult = styled.p`
  padding: 20%;
  font-size: 1.2rem;
  text-align: center;
`;

const MapContent = styled.p`
  font-size: 0.9rem;
  margin-left: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CheckboxContainer = styled.div`
  display: flex;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  margin-top: 3px;
`;

export const PopUpMessage = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
`;


const MemberTotalPost= ({ userMemberNum }) => {

  const [memberAllPost, setMemberAllPost] = useState([]); // 회원의 모든 게시글
  const [selectedPosts, setSelectedPosts] = useState([]); // 선택되는 게시글
  const [currentPage, setCurrentPage] = useState(1);      // 페이지네이션
  const [postsPerPage] = useState(5);  // 페이지당 보여줄 게시물 수
  const [showPopup, setShowPopup] = useState(false); // 팝업 

  // 회원 게시글 모두 호출
  useEffect(() => { 
    const fetchMemberAllPost = async () => {
      try {
        const response = await AccountAxiosApi.getMemberAllPost(userMemberNum);
        setMemberAllPost(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMemberAllPost();
  }, [userMemberNum]);

  // 체크박스 선택 함수
  const handleCheckboxChange = (event, postNum) => {
    if (event.target.checked) {
      setSelectedPosts((prevSelected) => [...prevSelected, postNum]);
      console.log("✓ 체크박스 선택");
      console.log(selectedPosts);
    } else {
      setSelectedPosts((prevSelected) =>
        prevSelected.filter((id) => id !== postNum)
      );
      console.log("✖︎ 중복체크 해제");
    }
  };

  // 함수 팝업
  const handleDeletePosts = () => {
    if (selectedPosts.length === 0) {
      setShowPopup(true);
    }
    console.log('선택된 글번호: ', selectedPosts);
    setShowPopup(true);
  };

  // 선택된 글번호 삭제 (팝업 삭제 버튼)
  const handleDeleteConfirmed = async () => {
      console.log('선택된 글번호: ', selectedPosts);
    try {
      const response = await AccountAxiosApi.deleteMyPost(selectedPosts);
      console.log('삭제된 글번호: ', selectedPosts);
      console.log('Deleted posts:', response);

      // 삭제 후 화면 업데이트
      setMemberAllPost((prevPosts) =>
        prevPosts.filter((post) => !selectedPosts.includes(post.postNum))
      );
      setSelectedPosts([]); // 선택된 글 목록 초기화
      setShowPopup(false);
    } catch (error) {
      console.error(error);
    }
  };

  /* 페이지네이션 */
    // 현재 페이지의 게시물 가져오기
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = memberAllPost.slice(indexOfFirstPost, indexOfLastPost);

    // 전체 페이지 수 계산
  const totalPages = Math.ceil(memberAllPost.length / postsPerPage);

    // 페이지 변경 시 호출되는 함수
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  return (
    <ParentContainer>
      <Title>내가 작성한 글</Title>
      <StyledLink>
        <Link to="/mypage">돌아가기</Link>
      </StyledLink>

      {memberAllPost.length === 0 ? (
        <NoResult>😱작성된 글이 없습니다.</NoResult>
      ) : (
        <MapContainer>
          {currentPosts.map((memberPost) => (
            <div key={memberPost.postNum}>
              <CheckboxContainer>
                <Checkbox
                  type="checkbox"
                  checked={selectedPosts.includes(memberPost.postNum)}
                  onChange={(event) => handleCheckboxChange(event, memberPost.postNum)}
                />
                <Link className='ellipsis' to={`/post/${memberPost.postNum}`}>
                  <MapTitle>{memberPost.postTitle}</MapTitle>
                </Link>
              </CheckboxContainer>
            <MapContent className='ellipsis_2'>
              {memberPost.postContent}
            </MapContent>
            <ExtraInfo>
              {memberPost.boardName} {memberPost.writeDate}
            </ExtraInfo>
          </div>
        ))}
        </MapContainer>
      )}

      <Button  
        onClick={handleDeletePosts} 
        size="small"
        sx={{width:"50px", alignSelf:"flex-end", fontWeight:"bold"}}>
          삭제
      </Button>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />


      {selectedPosts.length === 0 ? (
        <AccountPopUp
          open={showPopup}
          close={() => setShowPopup(false)}
          header="❗️Warning"
          closeText="취소"
        >
          <PopUpMessage>삭제할 게시글을 선택해주세요.</PopUpMessage>
        </AccountPopUp>
      ) : (
        <AccountPopUp
          open={showPopup}
          confirm={handleDeleteConfirmed}
          close={() => setShowPopup(false)}
          type="confirm"
          header="❗️Warning"
          confirmText="삭제"
          closeText="취소"
        >
          <PopUpMessage>
            선택하신 게시글을 <b>삭제</b> 합니다.<br />
            삭제된 게시글은 복구가 <span style={{color:"red", fontWeight:"bold"}}>불가능</span>합니다.
          </PopUpMessage>
        </AccountPopUp>
      )}
    </ParentContainer>
  );
};
export default MemberTotalPost;
