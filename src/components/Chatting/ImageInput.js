import React, { useState, useRef } from "react";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import ChatAxiosApi from "../../api/ChatAxiosApi";

const ImageInput = ({ setShowImageInput, chatRoom, userNum, otherUserNumber, setMessages, messages }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef();

  const handleUpload = async () => {
    const file = fileInputRef.current.files[0];
    if (!file) {
      console.log("파일이 없습니다.");
      return;
    }

    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setImageUrl(url);
  };

  const handleSendImage = async () => {
    if (imageUrl === null) {
      return;
    }
    const newMessage = {
      chatNumber: chatRoom,
      senderId: userNum,
      receiverId: otherUserNumber,
      imgUrl: imageUrl,
      isRead: 'N',
      createdAt: new Date()
    };

    try {
      await ChatAxiosApi.sendChatMessage(
        chatRoom,
        userNum,
        otherUserNumber,
        "",
        "",
        2,
        new Date(),
        'Y',
        imageUrl
      );
      setMessages([...messages, newMessage]);
    } catch (error) {
      console.log("이미지 전송 에러 : " + error);
    }
    setShowImageInput(false);
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} />
      <button onClick={handleUpload}>미리보기</button>
      {imageUrl && <img src={imageUrl} alt="imageUpload" />}
      <button onClick={handleSendImage}>전송</button>
    </div>
  );
}

export default ImageInput;

// {imageUrl && <img src={imageUrl} alt="imageUpload" />}