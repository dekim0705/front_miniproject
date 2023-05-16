import { useState, useEffect } from 'react';
import AccountAxiosApi from '../../api/AccountAxiosApi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pagination from './AccountPagination';
import { Button } from '@mui/material';
import AccountPopUp from '../../util/AccountPopUp';
import { ParentContainer, MapContainer, Title, 
        StyledLink, MapTitle, ExtraInfo, NoResult,
        CheckboxContainer, Checkbox, PopUpMessage } from './MemberTotalPost';


const PostTitle = styled.p`
  font-size: 0.9rem;
  margin-left: 24px;
  font-style: italic;
`;


const MemberTotalReply= ({ userMemberNum }) => {

  const [memberAllReply, setMemberAllReply] = useState([]);
  const [selectedReply, setSelectedReply] = useState([]); // 선택되는 댓글
  const [currentPage, setCurrentPage] = useState(1);      // 페이지네이션
  const [replysPerPage] = useState(5);  // 페이지당 보여줄 댓글 수
  const [showPopup, setShowPopup] = useState(false); // 팝업 
  
  useEffect(() => {
    const fetchMemberAllReply = async () => {
      try {
        const response = await AccountAxiosApi.getMemberAllReply(userMemberNum);
        setMemberAllReply(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMemberAllReply();
  }, [userMemberNum]);

    // 체크박스 선택 함수
    const handleCheckboxChange = (event, replyNum) => {
      if (event.target.checked) {
        setSelectedReply((prevSelected) => [...prevSelected, replyNum]);
        console.log("✓ 체크박스 선택");
        console.log(selectedReply);
      } else {
        setSelectedReply((prevSelected) =>
          prevSelected.filter((id) => id !== replyNum)
        );
        console.log("✖︎ 중복체크 해제");
      }
    };

     // 함수 팝업
  const handleDeleteReply = () => {
    if (selectedReply.length === 0) {
      setShowPopup(true);
    }
    setShowPopup(true);
    console.log('선택된 댓글번호: ', selectedReply);

  };

  // 선택된 댓글번호 삭제 (팝업 삭제 버튼)
  const handleDeleteConfirmed = async () => {
      console.log('선택된 댓글번호: ', selectedReply);
    try {
      const response = await AccountAxiosApi.deleteMyReply(selectedReply);
      console.log('삭제된 댓글번호: ', selectedReply);
      console.log('Deleted replys:', response);

      // 삭제 후 화면 업데이트
      setMemberAllReply((prevReply) =>
        prevReply.filter((reply) => !selectedReply.includes(reply.replyNum))
      );
      setSelectedReply([]); // 선택된 글 목록 초기화
      setShowPopup(false);
      
    } catch (error) {
      console.error(error);
    }
  };

  /* 페이지네이션 */
    // 현재 페이지의 게시물 가져오기
  const indexOfLastPost = currentPage * replysPerPage;
  const indexOfFirstPost = indexOfLastPost - replysPerPage;
  const currentReply = memberAllReply.slice(indexOfFirstPost, indexOfLastPost);

    // 전체 페이지 수 계산
  const totalPages = Math.ceil(memberAllReply.length / replysPerPage);

    // 페이지 변경 시 호출되는 함수
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  return (
      <ParentContainer>
      <Title>내가 작성한 댓글</Title>
      <StyledLink>
        <Link to='/mypage'>돌아가기</Link>
        </StyledLink>

      {memberAllReply.length === 0 ? (
        <NoResult>😱작성된 댓글이 없습니다.</NoResult>
      ) : (
        <MapContainer>
          {currentReply.map((memberReply) => (
            <div key={memberReply.replyNum}>
              <CheckboxContainer>
                <Checkbox
                  type="checkbox"
                  checked={selectedReply.includes(memberReply.replyNum)}
                  onChange={(event) => handleCheckboxChange(event, memberReply.replyNum)}
                />  
                <Link className='ellipsis' to={`/post/${memberReply.postNum}`}>
                  <MapTitle>{memberReply.replyContent}</MapTitle>
                </Link>
              </CheckboxContainer>
            <PostTitle>
              {memberReply.postTitle}
            </PostTitle>
            <ExtraInfo>
              {memberReply.boardName} {memberReply.writeDate}
            </ExtraInfo>
          </div>
        ))}
      </MapContainer>
    )}

<Button  
        onClick={handleDeleteReply} 
        size="small"
        sx={{width:"50px", alignSelf:"flex-end", fontWeight:"bold"}}>
          삭제
      </Button>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />


      {selectedReply.length === 0 ? (
        <AccountPopUp
          open={showPopup}
          close={() => setShowPopup(false)}
          header="❗️"
          closeText="취소"
        >
          <PopUpMessage>삭제할 댓글 선택해주세요.</PopUpMessage>
        </AccountPopUp>
      ) : (
        <AccountPopUp
          open={showPopup}
          confirm={handleDeleteConfirmed}
          close={() => setShowPopup(false)}
          type="confirm"
          header="❗️"
          confirmText="삭제"
          closeText="취소"
        >
          <PopUpMessage>
            선택하신 댓글을 <b>삭제</b> 합니다.<br />
            삭제된 댓글은 복구가 <span style={{color:"red", fontWeight:"bold"}}>불가능</span>합니다.
          </PopUpMessage>
        </AccountPopUp>
      )}

  </ParentContainer>
  );
};

export default MemberTotalReply;
