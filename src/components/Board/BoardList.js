import React from "react";
import styled from "styled-components";
import BoardItem from "./BoardItem";
import { Link } from 'react-router-dom';



const ListWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  overflow: hidden;

`;

const TableBox = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  
  tbody tr:hover {
    background-color : #f5f5f5;
  }
`;

const TableHeader = styled.thead`
  background-color: rgb(83,131,236);
  color: white;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 16px;
`;

const HeaderCell = styled.th`
  padding: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

`;


const BoardList = () => {
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
          {BoardItem.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.num}</TableCell>
              <TableCell>
              <StyledLink to={"/post"}>{item.title}</StyledLink>
              </TableCell>
              <TableCell>{item.nickname}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.views}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableBox>
    </ListWrapper>


  );
};

export default BoardList;
