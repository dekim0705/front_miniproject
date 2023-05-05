import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AlarmAxiosApi = {
  // 🔥 작성자에게 댓글 알림 보내기
  replyAlarm: async(postNum, memberNum, content) => {
    const data = {
      postNum : postNum,
      memberNum : memberNum,
      content : content
    };
    return await axios.post(KH_DOMAIN + "/reply-alarm", data);
  }
};

export default AlarmAxiosApi;