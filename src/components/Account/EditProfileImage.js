import { useState, useContext } from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { InfoSectionContainer } from "./MemberEditInformation";
import { storage } from "../../firebase";
import AccountAxiosApi from '../../api/AccountAxiosApi';
import { UserContext } from "../../context/UserInfo";
import AccountPopUp from "../../util/AccountPopUp";

const ProfileImageSection = styled.div`
  display: flex;
`;
const SelectImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
`;
const EditProfileImage = ({userMemberNum , currentMemberInfo, setUpdateCounter}) => {

  // 프로필 사진 업로드
  const [imageUpload, setImageUpload] = useState(null)
  const [imageUrl, setImageUrl] = useState("");
  // 업로드 된 사진 바로 적용하기 위한 useContext
  const { setUserPfImgUrl } = useContext(UserContext);

    // 팝업
    const [showPopUp, setShowPopUp] = useState(false);
    const [PopUpText, setPopUpText] = useState("");

  const upload = () => {
  if (imageUpload === null) {
    setShowPopUp(true);
    setPopUpText(`선택된 이미지가 없습니다. 😢`);
    console.log("선택된 이미지가 없습니다.");
    return;
  }
  const imageRef = ref(storage, `images/${userMemberNum}_${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
    console.log('프로필 사진 업로드 성공');// 업로드 되자마자 뜨게 하기
    getDownloadURL(snapshot.ref).then((url) => {
      setImageUrl(url);
    }); 
    console.log(userMemberNum, imageUrl);
    });
  };

  // 업로드된 프로필사진 db에 저장
  const changeImg = async() => {
    try {
      console.log("정보: ", imageUrl, userMemberNum);
      const mediaIndex = imageUrl.indexOf("alt=media");
      const extractedUrl = imageUrl.substring(0, mediaIndex + 9); //  "alt=media" 포함(9글자)
      
      console.log(extractedUrl);    
      setImageUrl(extractedUrl);  
      await AccountAxiosApi.updatePfImg(extractedUrl, userMemberNum);
      setImageUpload(imageUrl);
      setShowPopUp(true);
      setPopUpText(`프로필 사진이 변경되었습니다. 😊`);
      console.log('프로필 사진 변경 성공');
      setUserPfImgUrl(imageUrl) 
      setUpdateCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.error(error);
      console.log('프로필 사진 변경 실패');
    }
  };

  
  return(
    <InfoSectionContainer>
      <ProfileImageSection>
        {!imageUrl && currentMemberInfo.map((currentInfo) => (
          <div key={currentInfo.memberNum}>
              <img src={currentInfo.pfImg} alt="profile" style={{width:150, height:150, borderRadius:100}}/>
          </div>
        ))}
        {imageUrl && <img src={imageUrl} alt="UploadedImage" style={{width:150, height:150, borderRadius:100}}/>} 
        <SelectImageSection>
          <Button  component="label">사진 선택
            <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]);}} hidden accept="image/*" multiple />
          </Button>
          <Button onClick={upload} >선택한 사진 확인</Button>
        </SelectImageSection>
        
      </ProfileImageSection>
      <Button onClick={changeImg} variant="contained" sx={{borderRadius:20, fontWeight:"bold", alignSelf:"flex-end",  marginRight: 4}}>프로필 사진 변경</Button>

      <AccountPopUp open={showPopUp} close={()=>setShowPopUp(false)} header="❗️" closeText="확인">{PopUpText}</AccountPopUp>

    </InfoSectionContainer>
  );
}
export default EditProfileImage;