import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const MatchingAxiosApi = {
  // ✅ 멘토 매칭
  mentorInfo: async(menteeMemberNum) => {
    const mentorInfo = {
      menteeMemberNum : menteeMemberNum
    };
    return await axios.post(KH_DOMAIN + "/mentor", mentorInfo);
  },

  // ✅ 멘티 회원번호 요청
  menteeMemberNum: async(menteeEmail) => {
    const menteeMemberNum = {
      menteeEmail : menteeEmail
    };
    return await axios.post(KH_DOMAIN + "/mentee-memberNum", menteeMemberNum);
  },

  // ✅ 멘티 프로필, 닉네임 요청
  menteeInfo: async(menteeEmail) => {
    const menteeInfo = {
      menteeEmail : menteeEmail
    };
    return await axios.post(KH_DOMAIN + "/mentee", menteeInfo);
  },

  // ✅ 매칭 되어있는지 확인 요청
  isMatched: async(memberNum) => {
    const data = {
      memberNum : memberNum
    };
    return await axios.post(KH_DOMAIN + "/checkUserMatched", data);
  }
};

export default MatchingAxiosApi;