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
  }
};

export default AccountAxiosApi;