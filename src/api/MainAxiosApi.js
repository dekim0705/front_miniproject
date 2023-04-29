import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const MainAxiosApi = {
  // 🚀 사용자 프로필 요청하기
  getUserPfImg : async(email) => {
    const pfImg = {
      email : email
    };
    return await axios.post(KH_DOMAIN + "/member/pfImg", pfImg);
  }
};

export default MainAxiosApi;