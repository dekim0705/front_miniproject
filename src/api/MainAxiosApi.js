import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const MainAxiosApi = {
  // 🚀 사용자 프로필 요청하기
  userPfImg : async(email) => {
    const pfImg = {
      email : email
    };
    return await axios.post(KH_DOMAIN + "/member/pfImg", pfImg);
  },

  // 🚀 글 작성 많은 상위 5명 요청하기
  top5Writers : async() => {
    return await axios.get(KH_DOMAIN + "/member/top-5writers");
  },

  // 🚀 총 회원 수 요청하기
  totalMemberCount : async() => {
    return await axios.get(KH_DOMAIN + "/member/count");
  },

  // 🚀 오늘 올라온 글 갯수 요청하기
  todayPostCount : async() => {
    return await axios.get(KH_DOMAIN + "/post/today-count");
  },

  // 🚀 오늘 올라온 댓글 갯수 요청하기
  todayReplyCount : async() => {
    return await axios.get(KH_DOMAIN + "/reply/today-count");
  },

  // 🚀 포트폴리오 글 갯수 요청하기
  portfolioCount : async() => {
    return await axios.get(KH_DOMAIN + "/post/portfolio-count");
  },
  // 🚀 포트폴리오 글 갯수 요청하기
  totalPostCount : async() => {
    return await axios.get(KH_DOMAIN + "/post/count");
  }
};

export default MainAxiosApi;