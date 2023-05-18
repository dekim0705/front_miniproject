import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const boardAxiosApi = {

  // ✅ 회원이메일로 회원번호 가져오기
  userNum : async(email) => {
    const memberNum = {
      email : email
    };
    return await axios.post(KH_DOMAIN + "/member/number", memberNum);
  },

  // ✅ 회원이메일로 회원 닉네임 가져오기(경미님)
  userNickname: async (email) => {
    const body = { email };
    const response = await axios.post(KH_DOMAIN + "/member/nickname", body);
    return response.data;
  },

  // ✅ 전체 개시물 개수 요청
  getPostCount: async (boardNum) => {
    return await axios.get(KH_DOMAIN + `/posts?boardNum=${boardNum}`);
  },

  // ✅ 검색결과 개시물 개수 요청
    getSearchCount: async (boardNum,keyword) => {
      return await axios.get(KH_DOMAIN + `/search/posts?boardNum=${boardNum}&keyword=${keyword}`);
    },

  // ✅ 일반 게시판 글 목록 요청
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

  // ✅ 포트폴리오게시판 글목록 요청
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

  // ✅ 게시글 상세보기 요청
  requestPostDetail: async (postNum) => {
    try {
      const response = await axios.get(KH_DOMAIN + `/post/${postNum}`);
      return response.data;
    } catch (error) {
      console.error("상세글을 불러올 수 없습니다.", error);
      return [];
    }
  },

  // ✅ 댓글 불러오기
  requestReply: async (postNum) => {
    try {
      const response = await axios.get(KH_DOMAIN + `/reply?postNum=${postNum}`);
      return response.data;
    } catch (error) {
      console.error("댓글을 불러올 수 없습니다.", error);
      return [];
    }
  },

  // 👀 조회수 증가
  increaseViews: async (postNum) => {
    try {
      const response = await axios.post(KH_DOMAIN + `/post/${postNum}/views`);
      return response.data;
    } catch (error) {
      console.error("조회수 증가에 실패했습니다.", error);
      return false;
    }
  },

 // ✏️ 게시글 작성
 writePost: async (post) => {
  try {
    const response = await axios.post(KH_DOMAIN + '/post', post);
    return response.data;
  } catch (error) {
    console.error('게시글 작성에 실패했습니다.', error);
    return false;
  }
},

  // ✏️ 게시글 수정
  updatePost: async (post) => {
    try {
      const response = await axios.put(KH_DOMAIN + "/post", post);
      return response.data;
    } catch (error) {
      console.error("게시글 수정에 실패했습니다.", error);
      return false;
    }
  },

  // ✏️ 게시글 삭제
  deletePost: async (postNum) => {
    try {
      const response = await axios.delete(KH_DOMAIN + `/post/${postNum}`);
      return response.data;
    } catch (error) {
      console.error("게시글 삭제에 실패했습니다.", error);
      return false;
    }
  },

  // ✏️ 댓글 작성
  writeReply: async (postNum, memberNum, replyContent) => {
    try {
      const response = await axios.post(KH_DOMAIN + "/reply", {
        postNum,
        memberNum,
        replyContent,
      });
      return response.data;
    } catch (error) {
      console.error("댓글 작성에 실패했습니다.", error);
      return false;
    }
  },

  // ✏️ 댓글 수정
  updateReply: async (replyNum, replyContent) => {
    try {
      const response = await axios.put(KH_DOMAIN + "/reply", {
        replyNum,
        replyContent,
      });
      return response.data;
    } catch (error) {
      console.error("댓글 수정에 실패했습니다.", error);
      return false;
    }
  },

  // ✏️ 댓글 삭제
  deleteReply: async (replyNum) => {
    try {
      const response = await axios.delete(
        KH_DOMAIN + `/reply?replyNum=${replyNum}`
      );
      return response.data;
    } catch (error) {
      console.error("댓글 삭제에 실패했습니다.", error);
      return false;
    }
  },

  // ✅ 베스트 게시판 이동
  moveBestBoard: async () => {
    try {
      const response = await axios.post(KH_DOMAIN + "/board/best");
      console.log("응답:", response);
      return true;
    } catch (error) {
      console.error("베스트 게시판으로 이동에 실패했습니다.", error);
      return false;
    }
  },

  // 🔍 글 검색
  searchPosts: async (boardName, pageNum, keyword) => {
    try {
      const response = await axios.get(
        KH_DOMAIN +`/search?boardName=${boardName}&pageNum=${pageNum}&keyword=${encodeURIComponent(keyword)}`
      );
      return response.data;
    } catch (error) {
      console.error("게시판 검색에 실패했습니다.", error);
      return [];
    }
  },

  // ❤️ 추천 상태 확인 
  likeStaus: async (postNum, memberNum) => {
    try {
      const response = await axios.get(KH_DOMAIN +`/likeStatus?postNum=${postNum}&memberNum=${memberNum}`);
     return response.data;
    } catch (error) {
      console.error('추천수 업데이트를 실패했습니다.', error);
      return { isLiked: false };
   }
  },

  // ❤️ 추천수 업데이트
  updateLikes: async (postNum, memberNum) => {
    try {
     const response = await axios.post(KH_DOMAIN +`/like/${postNum}?memberNum=${memberNum}`);
     return response.data;
    } catch (error) {
      console.error('추천수 업데이트를 실패했습니다.', error);
      return null;
   }
  }
};

export default boardAxiosApi;
