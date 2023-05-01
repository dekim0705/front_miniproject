import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const boardAxiosApi = {

  // 전체 개시물 개수 요청
  getPostCount: async (boardNum) => {
    return await axios.get(KH_DOMAIN +`/posts`, {
      params: {
        boardNum: boardNum,
      },
    });
  },
  // 일반 게시판 글 목록 요청하기
  requesthBoardItems: async (boardName, pageNum) => {
    try {
      const response = await axios.get(KH_DOMAIN + `/${boardName}?pageNum=${pageNum}`);
      if(response.status === 200) {
        return response.data;
      }
    
    } catch (error) {
      console.error("글목록을 불러올 수 없습니다.", error);
      return [];
    }
  }
}

  // 포트폴리오게시판 글목록 요청하기
  


export default boardAxiosApi;
