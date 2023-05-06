import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import WelcomeMessage from './WelcomeMessage';
import NewPostCnt from './NewPostCnt';
import NewReplyCnt from './NewReplyCnt';
import PortfolioCnt from './PortfolioCnt';
import TotalPostCnt from './TotalPostCnt';
import MainAxiosApi from '../../api/MainAxiosApi';
import { SearchContext } from '../../context/SearchInfo';

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
  @media screen and (max-width:768px) {
    gap: 1rem;
  }
`;

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  gap: 40px;
  @media screen and (max-width:768px) {
    padding: 50px 0;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 50%;
  }
  .search-bar {
    width: 100%;
    height: 60px;
    border-radius: 40px;
    border: 3px solid #3B74EC;
    padding: 0 15px;
  }
  .search-icon {
    width: 50px;
    height: 50px;
    fill: #fff;
  }

  @media screen and (max-width:768px) {
    .main__container {
      padding: 20px;
    }
    .search {
      width: 90%;
    }
  }
`;

const Main = () => {
  const [searchInput, setSearchInput] = useState('');
  const { setResultData } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearchInputChange = e => setSearchInput(e.target.value);

  const handleSearchInconClick = async () => {
    try {
      const response = await MainAxiosApi.mainSearch(searchInput);
      setResultData(response.data);
      navigate(`/search?q=${searchInput}`);
    } catch (error) {
      console.error("검색 결과 없음" + error);
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      handleSearchInconClick();
    }
  }

  return (
      <StyledMainContainer>
      <WelcomeMessage />
      <div className="search">
        <input
          type="search"
          className="search-bar"
          value={searchInput}
          onChange={handleSearchInputChange}
          onKeyDown={handleKeyDown}
        />
        <SearchIcon
          style={{fontSize: 50}}
          onClick={handleSearchInconClick}
        />
      </div>
      <ValueContainer>
        <NewPostCnt />
        <NewReplyCnt />
        <PortfolioCnt />
        <TotalPostCnt />
      </ValueContainer>
    </StyledMainContainer>
  );
}

export default Main;
