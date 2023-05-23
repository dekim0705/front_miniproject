import React, { useState, useContext } from "react";
import AccountAxiosApi from "../../api/AccountAxiosApi";
import AccountPopUp from "../../util/AccountPopUp";
import { UserContext } from "../../context/UserInfo";
import { Button } from "@mui/material";

const WithdrawnButton = ({ userMemberNum }) => {
  const { isWithdrawn, setIsWithdrawn, setIsLogin, resetUser } = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false); // 팝업 
  const [PopUpText, setPopUpText] = useState("");

  const handleIsWithdrawn = () => {
    setPopUpText(
      <>
        회원 탈퇴시 동일한 이메일로 재가입이 <span style={{color:"red", fontWeight:"bold"}}>불가</span>합니다. <br />
        탈퇴하시겠습니까?
      </>
    )
    setShowPopup(true)
  }

  const updateMemberIsWithdrawn = async() => {
    try {
      await AccountAxiosApi.updateMemberIsWithdrawn(userMemberNum);
      console.log(isWithdrawn);
      setIsWithdrawn("Y");
      setIsLogin(false);
      resetUser();
      localStorage.clear();
    } catch (error) {
      console.log("회원 탈퇴 실패");
    }
  }



  
  return(
    <>
      <Button onClick={handleIsWithdrawn} sx={{alignSelf:"flex-end"}}> 회원 탈퇴 </Button>
      <AccountPopUp 
        open={showPopup} 
        close={() => setShowPopup(false)} 
        confirm={updateMemberIsWithdrawn}
        header="❗️❗️❗️" 
        type="confirm" 
        confirmText="탈퇴" 
        closeText="취소" >
          {PopUpText}
      </AccountPopUp>
    </>
  );
}
export default WithdrawnButton;