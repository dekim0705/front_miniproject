import { TrySharp } from "@mui/icons-material";
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
  },
  
  // ✅ 회원가입
  createMember: async(email, pwd, nickname, job, year, techStacks) => {
    try {
      const data = {
        email : email,
        pwd : pwd,
        nickname : nickname,
        job : job,
        year : year,
        techStacks : techStacks,
      };
      const response = await axios.post(KH_DOMAIN + "/signup", data);
      return response.data;
    } catch (error) {
      console.log("🤦🏻‍♀️ 회원가입실패");
      console.error(error);
    }
  },

    // ✅ 마이페이지 수정용 내 정보 호출
    getMemberCurrentInfo: async (memberNum) => {
      try {
        const response = await axios.get(KH_DOMAIN + `/mypage/edit?memberNum=${memberNum}`)
        return response.data;
      } catch (error) {
        console.log("🤦🏻‍♀️ 수정용 회원 정보 조회 실패 : ", error);
        return [];
      }
    },

    // ✅ 마이페이지 내 정보 일괄 수정
    updateMemberInfo: async (memberNum, memberInfo) => {
      try {
        const response = await axios.post(KH_DOMAIN + `/mypage/edit`, {
          memberNum: memberNum,
          memberNickname: memberInfo.memberNickname,
          memberPwd: memberInfo.memberPwd,
          memberJob: memberInfo.memberJob,
          memberYear: memberInfo.memberYear,
        });
        console.log("회원정보 수정 성공: ", response);
        return response.data;
      } catch (error) {
        console.log("🤦🏻‍♀️회원정보 수정 실패: ", error);
        return [];
      }
    },

    // ✅ 마이페이지 기술스택 삭제
    deleteStack: async (memberNum, memberTechStackNum) => {
      try {
        const requestData = {
          memberNum: memberNum,
          memberTechStackNum: memberTechStackNum
        };
    
        const response = await axios.delete(KH_DOMAIN + `/mypage/edit/${memberNum}/${memberTechStackNum}`, {
          data: requestData
        });
        
        return response.data;
      } catch (error) {
        throw new Error('🤦🏻‍♀️기술스택 삭제 실패');
      }
    },
    
    // ✅ 마이페이지 기술스택 추가
    addStack: async (memberNum, techStackNum) => {
      try {
        const requestData = {
          memberNum: memberNum,
          techStackNum: techStackNum
        };
    
        await axios.post(KH_DOMAIN + `/mypage/add/${memberNum}/${techStackNum}`, requestData);
      } catch (error) {
        throw new Error('🤦🏻‍♀️기술스택 추가 실패');
      }
    },

    // ❗️❗️❗️❗️❗️❗️플필사진 수정
    updatePfImg: async (imageUrl, userMemberNum) => {
      try {
        const response = await axios.put(KH_DOMAIN +`/mypage/myprofile`, {
          memberPfImgUrl: imageUrl,
          memberNum: userMemberNum
        });
        console.log(response.data);
        console.log('회원플필 변경!!!성공!');
        // 성공적으로 업데이트된 경우에 대한 처리
      } catch (error) {
        console.error(error);        
        console.log('회원플필 변경!!!망함 집가자!');

        // 에러 발생 시에 대한 처리
      }
    }

};


export default AccountAxiosApi;