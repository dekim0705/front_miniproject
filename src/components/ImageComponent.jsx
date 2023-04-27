import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, getStorage } from "firebase/storage"; // firebase/storage 모듈 가져오기
import { storage } from "../firebase"; // firebase.js에서 storage 가져오기

const ImageComponent = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      const storageRef = ref(storage, "profileTest1.PNG");
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
    };
    fetchImageUrl();
  }, []);

  return <img src={imageUrl} alt="profile test" />;
};

export default ImageComponent;