import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const boardAxiosApi = {

  // 전체 개시물 개수 요청
  getPostCount: async (boardNum) => {
    return await axios.get(KH_DOMAIN+`/posts?boardNum=${boardNum}`);
  },
  
  // 일반 게시판 글 목록 요청하기
  requestGeneralList: async (boardName, pageNum) => {
    try {
      const response = await axios.get(KH_DOMAIN + `/${boardName}?pageNum=${pageNum}`);
        return response.data;
    } catch (error) {
      console.error("글목록을 불러올 수 없습니다.", error);
      return [];
    }
  },

  // 포트폴리오게시판 글목록 요청하기
  requestPortfolioList: async (pageNum) => {
   try {
      const response = await axios.get(KH_DOMAIN + `/Portfolio?pageNum=${pageNum}`);
        return response.data;
   } catch (error) {
    console.error("포트폴리오 게시판 목록을 불러올 수 없습니다.", error);
    return [];
   }
  },

  // 게시글 상세보기 요청하기
  requestPostDetail: async (postNum) => {
    try {
      const response = await axios.get(KH_DOMAIN + `/post/${postNum}`)
      return response.data;
    } catch (error) {
      console.error('상세글을 불러올 수 없습니다.',error);
      return[];
    }
  },

  // 댓글을 불러오기
requestReply: async (postNum) => {
  try {
    const response = await axios.get(KH_DOMAIN + `/reply?postNum=${postNum}`);
    return response.data;
  } catch (error) {
    console.error('댓글을 불러올 수 없습니다.', error);
    return [];
  }
},

// 조회수 증가
increaseViews: async (postNum) => {
  try {
    const response = await axios.post(KH_DOMAIN + `/post/${postNum}/views`);
    console.log('조회수 증가에 성공했습니다.', response);
    return response.data;
  } catch (error) {
    console.error('조회수 증가에 실패했습니다.', error);
    return false;
  }
}



}


export default boardAxiosApi;
