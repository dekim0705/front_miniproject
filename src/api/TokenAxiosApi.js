import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const TokenAxiosApi = {
  getToken : async(email, pwd) => {
    const token = {
      email : email,
      pwd : pwd
    };
    return await axios.post(KH_DOMAIN + "/auth", token, {
      headers: {
        'Content-Type' : 'application/json'
      }
    });
  },

  userInfo : async (token) => {
    return await axios.get(KH_DOMAIN + "/user", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
  }
};

export default TokenAxiosApi;