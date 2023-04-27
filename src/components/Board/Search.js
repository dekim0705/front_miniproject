import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 50%;
  display: flex;
    align-items: center;
    margin-left : 300px;
    padding-left :220px;
    padding-bottom: 10px;
    justify-content: flex-end;
    gap: 5px;
  `;

  const SearchBar = styled.input`
  width : 50%;
  height: 40px;
  border-radius: 25px;
  font-size : 0.9rem;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  padding-left : 10px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  top: 50%;
`;

const SearchInput = () => {
  return (
    <SearchContainer>
      <SearchBar type="search" placeholder="  검색어를 입력하세요" />
      <StyledSearchIcon />
    </SearchContainer>
  );
}

export default SearchInput;