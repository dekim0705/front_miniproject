import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import boardAxiosApi from "../../api/BoardAxiosApi";



const ListWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 768px) {
    min-width: 600px;
  }
`;

const TableBox = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  
  tbody tr:hover {
    background-color : #f5f5f5;
  }
`;

const HeaderCell = styled.th`
  padding: 16px;
`;


const TableHeader = styled.thead`
  background-color: rgb(83,131,236);
  color: white;

  @media (max-width: 768px) {
    ${HeaderCell}:nth-child(5) {
      display: none;
    }
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 16px;
  @media (max-width: 768px) {
    &.view {
      display: none;
    }
  }
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

`;


const BoardList = ({ boardName, pageNum }) => {
  const [boardItem, setBoardItem] = useState([]);
  
    useEffect(() => {
      const fetchBoardItems = async () => {
        const items = await boardAxiosApi.requestGeneralList(boardName, pageNum);
        setBoardItem(items);
      };
  
      fetchBoardItems();
    }, [boardName, pageNum]);
  


  return ( 
        <ListWrapper>
      <TableBox>
        <TableHeader>
          <TableRow>
            <HeaderCell>번호</HeaderCell>
            <HeaderCell>제목</HeaderCell>
            <HeaderCell>작성자</HeaderCell>
            <HeaderCell>날짜</HeaderCell>
            <HeaderCell>조회</HeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {boardItem.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.postNum}</TableCell>
              <TableCell>
              <StyledLink to={`/post/${item.postNum}`}>{item.title}</StyledLink>
              </TableCell>
              <TableCell>{item.nickname}</TableCell>
              <TableCell>{item.writeDate}</TableCell>
              <TableCell className="view">{item.viewCount}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableBox>
    </ListWrapper>


  );
};

export default BoardList;
