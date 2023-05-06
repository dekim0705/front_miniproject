import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const MainAxiosApi = {
  // ✅ 사용자 프로필 요청(email)
  userPfImg : async(email) => {
    const pfImg = {
      email : email
    };
    return await axios.post(KH_DOMAIN + "/member/pfImg", pfImg);
  },

  // ✅ 사용자 프로필 요청(memberNum)
  userPfImgByNum : async(memberNum) => {
    const pfImg = {
      memberNum : memberNum
    };
    return await axios.post(KH_DOMAIN + "/memberNum/pfImg", pfImg);
  },

  // ✅ 사용자 닉네임 요청(memberNum)
  userNicknameByNum : async(memberNum) => {
    const nickname = {
      memberNum : memberNum
    };
    return await axios.post(KH_DOMAIN + "/memberNum/nickname", nickname);
  },

  // ✅ 글 작성 많은 상위 5명 요청
  top5Writers : async() => {
    return await axios.get(KH_DOMAIN + "/member/top-5writers");
  },

  // ✅ 총 회원 수 요청
  totalMemberCount : async() => {
    return await axios.get(KH_DOMAIN + "/member/count");
  },

  // ✅ 오늘 올라온 글 갯수 요청
  todayPostCount : async() => {
    return await axios.get(KH_DOMAIN + "/post/today-count");
  },

  // ✅ 오늘 올라온 댓글 갯수 요청
  todayReplyCount : async() => {
    return await axios.get(KH_DOMAIN + "/reply/today-count");
  },

  // ✅ 포트폴리오 글 갯수 요청
  portfolioCount : async() => {
    return await axios.get(KH_DOMAIN + "/post/portfolio-count");
  },
  
  // ✅ 포트폴리오 글 갯수 요청
  totalPostCount : async() => {
    return await axios.get(KH_DOMAIN + "/post/count");
  },

  // ✅ 각 게시판 별 최근 게시글 5개 요청
  latestPosts: async(boardNum) => {
    return await axios.get(KH_DOMAIN + `/post/latest/${boardNum}`);
  }
};

export default MainAxiosApi;