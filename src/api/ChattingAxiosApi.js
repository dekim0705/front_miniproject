import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const ChattingAxiosApi = {
  // 🐢 멘토 매칭
  requestMentorProfile: async(menteeMemberNum) => {
    try {
      const response = await axios.post(KH_DOMAIN + "/mentor", {
        menteeMemberNum: menteeMemberNum
      });

      if(response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if(error.response && error.response.status === 404) {
        console.error("매칭된 멘토가 없습니다..🥹");
      } else {
        console.error("알 수 없는 오류가 발생했습니다..😰");
      }
    }
    return null;
  }
};

export default ChattingAxiosApi;