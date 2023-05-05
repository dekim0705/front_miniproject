import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const ChatAxiosApi = {
  // ✅ 채팅 시작 요청 (채팅방 저장)
  saveChatRoom: async (mentorMemberNum, menteeMemberNum) => {
    const chatUserInfo = {
      mentorMemberNum : mentorMemberNum,
      menteeMemberNum : menteeMemberNum
    };
    return await axios.post(KH_DOMAIN + "/chat", chatUserInfo);
  },

  // ✅ 채팅 메시지 전송 요청
  sendChatMessage: async (chatNum, senderId, receiverId, message, codeBlock, messageType, createdAt, isRead) => {
    const data = {
      chatNum : chatNum,
      senderId : senderId,
      receiverId : receiverId,
      message : message,
      codeBlock : codeBlock,
      messageType : messageType,
      createdAt : createdAt.toISOString(),
      isRead : isRead.toString()
    };
    return await axios.post(KH_DOMAIN + "/chat/message", data);
  },

  // ✅ 매칭된 모든 회원의 회원 번호 요청
  allMentorMenteeNum: async () => {
    return await axios.get(KH_DOMAIN + "/mentor-mentee");
  },

  // ✅ 로그인 한 유저가 속한 채팅방 요청
  chatRoomNum: async (userNum) => {
    return await axios.get(KH_DOMAIN + `/chat/${userNum}/room`);
  },

  // ✅ 채팅방 메시지 정보 요청
  chatMessages: async (chatRoom) => {
    const data = {
      chatRoom: chatRoom
    };
    return await axios.post(KH_DOMAIN + '/chat/messages', data);
  },

  // ✅ 채팅방에 있는 유저 정보 요청
  chatRoomInfo: async (chatRoom) => {
    return await axios.get(KH_DOMAIN + `/chat/chatRoom/${chatRoom}`);
  },

  // 📩 채팅 상대방 회원 정보 요청
  userDetails: async (memberNum) => {
    return await axios.get(KH_DOMAIN + `chat/${memberNum}/details`);
  },

  // 📩 채팅 메시지 조회 요청
  // chatMessages: async (senderId, receiverId) => {
  //   return await axios.get(KH_DOMAIN + `/chat/messages/${senderId}/${receiverId}`);
  // },

  // 📩 안읽은 메시지 조회 요청
  unreadMessages: async (memberNum) => {
    return await axios.get(KH_DOMAIN + `/chat/${memberNum}/unread-messsages`);
  },

  // 📩 메시지 읽었다고 알리기
  updateMessageReadStatus: async (messageId) => {
    return await axios.patch(KH_DOMAIN + `/chat/messages/${messageId}`);
  },

  // 📩 대화 종료 -> 대화방 삭제
  deleteChatRoom: async (chatNum) => {
    return await axios.delete(KH_DOMAIN + `/chat`, { params: { chatNum }});
  },

  // 📩 대화 종료 -> 채팅 메시지 삭제
  deleteChatMessages: async (chatNum) => {
    return await axios.delete(KH_DOMAIN + `/chat/messages`, { params: { chatNum }});
  },

  // ⛑️ 채팅방 개설 API
  chatRoomOpen: async (name) => {
    const chatObject = {
      "name" : name
    }
    return await axios.post(KH_DOMAIN + "test", chatObject);
  }
};

export default ChatAxiosApi;