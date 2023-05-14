import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  border: 1px solid #eee;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 1px 1px 1px #000;
  gap: 8px;
  cursor: pointer;

  * {
    margin: 0;
    box-sizing: border-box;
  }
  @media screen and (max-width:768px) {
    width: 85%;
  }
`;

const BannerIcon = styled.div`
  background-color: #1E2B4D;
  width: 130px;
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 0.8em;
  border-radius: 8px;
  font-weight: bolder;
`;

const TraTitle = styled.div`
  font-size: 1.3em;
  font-weight: bolder;
`;

const TraItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .title {
    font-size: 0.8em;
    padding: 10px 20px;
    background-color: #eee;
    border-radius: 15px;
    font-weight: bold;
  }
  .content {
    font-size: 0.9em;
  }
`;

const HRDNetAPI = () => {
  const [apiData, setApiData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const url = `https://cors-anywhere.herokuapp.com/https://www.hrd.go.kr/jsp/HRDP/HRDPO00/HRDPOA60/HRDPOA60_1.jsp?returnType=JSON&authKey=${process.env.REACT_APP_SERVICE_KEY}&pageNum=1&pageSize=10&srchTraStDt=20230531&srchTraEndDt=20230630&outType=1&sort=ASC&sortCol=TRNG_BGDE&crseTracseSe=C0104&srchTraGbn=M1001&srchTraArea1=00`;

  /*  traStartDate : 개강일(YYYY-MM-DD)
      traEndDate : 종강일(YYYY-MM-DD)
      subTitle : 기관명(강남 그린컴퓨터아카데미)
      title : 훈련 과정명
      (프로젝트기반 프론트엔드(React, Vue) 웹&앱 SW 개발자 양성과정
      address : 주소(서울시 강남구)
      titleLink : URL(https://~)
   */

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          'x-requested-with': 'xhr'
        }
      });
      const tmp = response.data.returnJSON;
      const obj = JSON.parse(tmp);
      setApiData(obj.srchList);

    } catch (error) {
      console.error(`HRDNet 오류!!🐞 : ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % apiData.length);
    }, 3300);
    return () => clearInterval(interval);
  }, [apiData]);

  if (apiData.length === 0) {
    return <div>Loading...</div>;
  }

  const handleLinkToPage = () => {
    window.open(apiData[currentIndex].titleLink, "_blank");
  };

  return (
    <StyledContainer onClick={handleLinkToPage}>
      <BannerIcon>K-디지털 트레이닝</BannerIcon>
      <TraTitle>{apiData[currentIndex].title}</TraTitle>
      <TraItem>
        <div className="title">훈련 기관</div>
        <p className="content">{apiData[currentIndex].subTitle}</p>
      </TraItem>
      <TraItem>
        <div className="title">훈련 기간</div>
        <p className="content">{apiData[currentIndex].traStartDate} ~ {apiData[currentIndex].traEndDate}</p>
      </TraItem>
      <TraItem>
        <div className="title">주소</div>
        <p className="content">{apiData[currentIndex].address}</p>
      </TraItem>
    </StyledContainer>
  );
}

export default HRDNetAPI;