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
  },

  // ✅ 마이페이지 내 정보 호출
  getMemberInfo: async(memberNum) => {
    try {
      const response = await axios.get(KH_DOMAIN + `/mypage/myprofile?memberNum=${memberNum}`)
      return response.data;
    } catch (error) {
      console.log("🤦🏻‍♀️ 회원 정보 조회 실패 : ", error);
      return [];
    }
  },

  // ✅ 마이페이지 내 기술스택 호출
  getMemberTechStackInfo: async(memberNum) => {
    try{
    const response = await axios.get(KH_DOMAIN + `/mypage/mytechstacks?memberNum=${memberNum}`)
    return response.data;
    } catch (error) {
      console.log("🤦🏻‍♀️ 회원 기술스택 조회 실패 : ", error);
      return[];
    }
  },
  
  // ✅ 마이페이지 내 최근 게시글 호출
  getMemberLatestPost: async(memberNum) => {
    try{
      const response = await axios.get(KH_DOMAIN + `/mypage/my-5-latest-post?memberNum=${memberNum}`)
      return response.data;
    } catch (error) {
      console.log("🤦🏻‍♀️ 회원 최근 게시글 5개 조회 실패 : ", error);
      return{};
    }
  },

  // ✅ 마이페이지 내 최근 댓글 호출
  getMemberLatestReply: async(memberNum) => {
    try{
      const response = await axios.get(KH_DOMAIN + `/mypage/my-5-latest-reply?memberNum=${memberNum}`)
      return response.data;
    } catch (error) {
      console.log("🤦🏻‍♀️ 회원 최근 댓글 5개 조회 실패 : ", error);
      return{};
    }
  },

  // ✅ 내 모든 게시글 호출
  getMemberAllPost: async(memberNum) => {
    try{
      const response = await axios.get(KH_DOMAIN + `/mypage/my-all-post?memberNum=${memberNum}`)
      return response.data;
    } catch (error) {
      console.log("🤦🏻‍♀️ 회원의 모든 게시글 조회 실패 : ", error);
      return{};
    }
  },
  
  // ✅ 내 모든 댓글 호출
  getMemberAllReply: async(memberNum) => {
    try{
      const response = await axios.get(KH_DOMAIN + `/mypage/my-all-reply?memberNum=${memberNum}`)
      console.log(response)
      return response.data;
    } catch (error) {
      console.log("🤦🏻‍♀️ 회원의 모든 댓글 조회 실패 : ", error);
      return{};
    }
  },

  // ✅ 내 게시글 (다중)삭제
  deleteMyPost: async (postNums) => {
    return await axios.delete(KH_DOMAIN + `/mypage/mypost`, {
      headers: {
        'Content-Type': 'application/json' // 요청 본문의 데이터 타입 설정
      },
      data: postNums // 배열 전달
    });
  },

    // ✅ 내 댓글 (다중)삭제
    deleteMyReply: async (replyNums) => {
      return await axios.delete(KH_DOMAIN + `/mypage/myreply`, {
        headers: {
          'Content-Type': 'application/json' // 요청 본문의 데이터 타입 설정
        },
        data: replyNums // 배열 전달
      });
  }
  



};


export default AccountAxiosApi;