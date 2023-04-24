import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // ✨ 로그인
  loginUser : async(email, pwd) => {
    const login = {
      id : email,
      pwd : pwd
    };
    return await axios.post(KH_DOMAIN + "/login", login);
  }
};

export default AxiosApi;