import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AccountAxiosApi = {
  // ✨ 로그인
  loginMember : async(email, pwd) => {
    const login = {
      email : email,
      pwd : pwd
    };
    return await axios.post(KH_DOMAIN + "/login", login);
  },

  // ✅ 닉네임 중복 여부 확인
  memberRegCheck: async(nickname) => {
    return await axios.get(KH_DOMAIN + `/check?nickname=${nickname}`);
  },
  
  // ✅ 모든 기술스택 호출
  allTechStacks: async() => {
    return await axios.get(KH_DOMAIN + `/techstacks/all`);
  },
  
  // ✅닉네임으로 이메일주소 호출
  getMemberEmail: async(nickname) => {
      return await axios.get(KH_DOMAIN + `/findaccount/check?nickname=${nickname}`)
  },

  // ✅닉네임&이메일로 회원 존재 여부 확인
  getIsMember: async(nickname, email) => {
    return await axios.get(KH_DOMAIN + `/check/ismember?nickname=${nickname}&email=${email}`)
  }


};

export default AccountAxiosApi;