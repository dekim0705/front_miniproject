import React, { useState, useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";

const ImageComponent = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      const storageRef = ref(storage, "https://firebasestorage.googleapis.com/v0/b/devcom-mini-project.appspot.com/o/profileTest1.PNG?alt=media");
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
    };
    fetchImageUrl();
  }, []);

  return <img src={imageUrl} alt="profile test" />;
};

export default ImageComponent;