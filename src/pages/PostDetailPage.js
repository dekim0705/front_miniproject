import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserInfo";
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';
import TagList from '../components/Board/TagList';
import PostInfo from '../components/Board/PostInfo';
import Content from '../components/Board/PostContent';
import LikeButton from '../components/Board/LikeButton';
import EditButton from '../components/Board/EditButton';
import Footer from '../components/Footer';
import boardAxiosApi from "../api/BoardAxiosApi";
import ReplyList from "../components/Board/ReplyList";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const BoardWrapper = styled.div`
  width: 70%;
  padding: 30px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const TagListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentWrapper = styled.div`
  width: 67%;
  margin: 20px 0;
  padding : 20px 0;
  border-top : solid 1px #ccc;
  border-bottom : solid 1px #ccc;
`;

const PostDetailPage = () => {
  const { postNum } = useParams();
  const [postDetail, setPostDetail] = useState({});
  const [reply, setReply] = useState([]);
  const [showEditButton, setShowEditButton] = useState(false);
  const { userNickname } = useContext(UserContext);
  console.log('로그인시 닉네임 가져오기!!:' ,userNickname);

 
  
  useEffect(() => {
    
    const fetchPostDetail = async () => {
      const response = await boardAxiosApi.requestPostDetail(postNum);
      setPostDetail(response[0]);
    };

    const fetchReply = async () => {
      const response = await boardAxiosApi.requestReply(postNum);
      setReply(response);
    };

    const increaseViews = async () => {
      console.log('increaseViews 실행');
      await boardAxiosApi.increaseViews(postNum);
      console.log('increaseViews 완료');
    };

    fetchPostDetail();
    fetchReply();
    increaseViews();
  }, [postNum]);

  useEffect(() => {
    console.log("User nickname:", userNickname);
    console.log("Post detail nickname:", postDetail.nickname);

    if (userNickname && postDetail && postDetail.nickname && userNickname.trim() === postDetail.nickname.trim()) {
      setShowEditButton(true);
    } else {
      setShowEditButton(false);
    }
  }, [userNickname, postDetail]);

  return (
    <>
      <Header />
        <Wrapper>
        <BoardWrapper>
          <PostInfo postDetail={postDetail} />
          <Content content={postDetail && postDetail.content} />
          <TagListWrapper>
          <TagList tags={postDetail && postDetail.tag} />
            <LikeButton />
          </TagListWrapper>
        </BoardWrapper>
        <CommentWrapper>
          <ReplyList reply={reply}  />
          </CommentWrapper>
      </Wrapper>
      {showEditButton && <EditButton postNum={postNum} />}
      <Footer />
    </>
  );
};



export default PostDetailPage;