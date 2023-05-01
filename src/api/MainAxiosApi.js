import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const MainAxiosApi = {
  // 🚀 사용자 프로필 요청하기
  getUserPfImg : async(email) => {
    const pfImg = {
      email : email
    };
    return await axios.post(KH_DOMAIN + "/member/pfImg", pfImg);
  },

  // 🚀 글 작성 많은 상위 5명 요청하기
  getTop5Writers : async() => {
    return await axios.get(KH_DOMAIN + "/member/top-5writers");
  }
};

export default MainAxiosApi;