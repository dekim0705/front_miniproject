import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 0 3px;
  border: ${({ isActive }) => (isActive ? '#E5E7EA' : '#C6DEF7')};
  border-radius: 50%;
  text-decoration: none;
  background-color: ${({ isActive }) => (isActive ? '#3B74EC' : '#ffffff')};
  color: ${({ isActive }) => (isActive ? '#E5E7EA' : '#4E5968')};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    font-weight: 900;
    background-color: #C6DEF7;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((page) => (
        <PageButton
          key={page}
          isActive={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
