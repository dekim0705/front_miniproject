import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const boardAxiosApi = {

  // 회원이메일로 회원번호 가져오기
  userNum : async(email) => {
    const memberNum = {
      email : email
    };
    return await axios.post(KH_DOMAIN + "/member/number", memberNum);
  },

  // 회원이메일로 회원 닉네임 가져오기(경미님)
  userNickname: async (email) => {
    const body = { email };
    const response = await axios.post(KH_DOMAIN + "/member/nickname", body);
    return response.data;
  },

  // 전체 개시물 개수 요청
  getPostCount: async (boardNum) => {
    return await axios.get(KH_DOMAIN + `/posts?boardNum=${boardNum}`);
  },

  // 일반 게시판 글 목록 요청하기
  requestGeneralList: async (boardName, pageNum) => {
    try {
      const response = await axios.get(
        KH_DOMAIN + `/${boardName}?pageNum=${pageNum}`
      );
      return response.data;
    } catch (error) {
      console.error("글목록을 불러올 수 없습니다.", error);
      return [];
    }
  },

  // 포트폴리오게시판 글목록 요청하기
  requestPortfolioList: async (pageNum) => {
    try {
      const response = await axios.get(
        KH_DOMAIN + `/Portfolio?pageNum=${pageNum}`
      );
      return response.data;
    } catch (error) {
      console.error("포트폴리오 게시판 목록을 불러올 수 없습니다.", error);
      return [];
    }
  },

  // 게시글 상세보기 요청하기
  requestPostDetail: async (postNum) => {
    try {
      const response = await axios.get(KH_DOMAIN + `/post/${postNum}`);
      return response.data;
    } catch (error) {
      console.error("상세글을 불러올 수 없습니다.", error);
      return [];
    }
  },

  // 댓글을 불러오기
  requestReply: async (postNum) => {
    try {
      const response = await axios.get(KH_DOMAIN + `/reply?postNum=${postNum}`);
      return response.data;
    } catch (error) {
      console.error("댓글을 불러올 수 없습니다.", error);
      return [];
    }
  },

  // 조회수 증가
  increaseViews: async (postNum) => {
    try {
      const response = await axios.post(KH_DOMAIN + `/post/${postNum}/views`);
      return response.data;
    } catch (error) {
      console.error("조회수 증가에 실패했습니다.", error);
      return false;
    }
  },

 // 게시글 작성
 writePost: async (post) => {
  try {
    const response = await axios.post(KH_DOMAIN + '/post', post);
    console.log('게시글 작성에 성공했습니다.posNum:', response.data);
    return response.data;
  } catch (error) {
    console.error('게시글 작성에 실패했습니다.', error);
    return false;
  }
},

  // 게시글 수정
  updatePost: async (post) => {
    try {
      const response = await axios.put(KH_DOMAIN + "/post", post);
      console.log("게시글 수정에 성공했습니다.", response);
      return response.data;
    } catch (error) {
      console.error("게시글 수정에 실패했습니다.", error);
      return false;
    }
  },

  // 게시글 삭제
  deletePost: async (postNum) => {
    try {
      const response = await axios.delete(KH_DOMAIN + `/post/${postNum}`);
      console.log("게시글 삭제에 성공했습니다.", response);
      return response.data;
    } catch (error) {
      console.error("게시글 삭제에 실패했습니다.", error);
      return false;
    }
  },

  // 댓글 작성
  writeReply: async (postNum, memberNum, replyContent) => {
    try {
      const response = await axios.post(KH_DOMAIN + "/reply", {
        postNum,
        memberNum,
        replyContent,
      });
      console.log("댓글 작성에 성공했습니다.", response);
      return response.data;
    } catch (error) {
      console.error("댓글 작성에 실패했습니다.", error);
      return false;
    }
  },

  // 댓글 수정
  updateReply: async (replyNum, content) => {
    try {
      const response = await axios.put(KH_DOMAIN + "/reply", {
        replyNum,
        content,
      });
      console.log("댓글 수정에 성공했습니다.", response);
      return response.data;
    } catch (error) {
      console.error("댓글 수정에 실패했습니다.", error);
      return false;
    }
  },

  // 댓글 삭제
  deleteReply: async (replyNum) => {
    try {
      const response = await axios.delete(
        KH_DOMAIN + `/reply?replyNum=${replyNum}`
      );
      console.log("댓글 삭제에 성공했습니다.", response);
      return response.data;
    } catch (error) {
      console.error("댓글 삭제에 실패했습니다.", error);
      return false;
    }
  },

  // 베스트 게시판 이동
  moveBestBoard: async () => {
    try {
      const response = await axios.post(KH_DOMAIN + "/board/best");
      console.log("Response data:", response);
      return true;
    } catch (error) {
      console.error("베스트 게시판으로 이동에 실패했습니다.", error);
      return false;
    }
  },

  // 글 검색
  searchPosts: async (boardNum, pageNum, keyword) => {
    try {
      const response = await axios.get(
        KH_DOMAIN +
          `/search?boardNum=${boardNum}&pageNum=${pageNum}&keyword=${keyword}`
      );
      console.log("Response data:", response);
      return response.data;
    } catch (error) {
      console.error("게시판 검색에 실패했습니다.", error);
      return [];
    }
  },
};

export default boardAxiosApi;
