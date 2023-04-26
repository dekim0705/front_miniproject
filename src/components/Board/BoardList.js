import React from "react";
import styled from "styled-components";

// 더미 데이터 생성
const dummyData = [
  {
    num: 1,
    title: "글 제목이 들어갑니다.",
    writer: "김이름",
    date: "2021.1.15",
    count: 33,
  },
  {
    num: 2,
    title: "글 제목이 들어갑니다.",
    writer: "김이름",
    date: "2021.1.15",
    count: 33,
  },
  {
    num: 3,
    title: "글 제목이 들어갑니다.",
    writer: "김이름",
    date: "2021.1.15",
    count: 33,
  },
  {
    num: 4,
    title: "글 제목이 들어갑니다.",
    writer: "김이름",
    date: "2021.1.15",
    count: 33,
  },
  {
    num: 5,
    title: "글 제목이 들어갑니다.",
    writer: "김이름",
    date: "2021.1.15",
    count: 33,
  },
  {
    num: 6,
    title: "글 제목이 들어갑니다.",
    writer: "김이름",
    date: "2021.1.15",
    count: 33,
  },
  {
    num: 7,
    title: "글 제목이 들어갑니다.",
    writer: "김이름",
    date: "2021.1.15",
    count: 33,
  },
  {
    num: 8,
    title: "글 제목이 들어갑니다.",
    writer: "김이름",
    date: "2021.1.15",
    count: 33,
  },
  {
    num: 9,
    title: "글 제목이 들어갑니다.",
    writer: "김이름",
    date: "2021.1.15",
    count: 33,
  },
  {
    num: 10,
    title: "글 제목이 들어갑니다.",
    writer: "김이름",
    date: "2021.1.15",
    count: 33,
  },
  
  
];

const ListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  border: 1px solid #e5e5e5;
`;


const BoardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e5e5e5;
  text-align: center;
`;

const TableHeader = styled.thead`
  background-color: #f5f5f5;

`;

const BoardList = () => {
  return (
    <ListWrapper>
    <BoardTable>
      <TableHeader>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>작성일</th>
          <th>조회</th>
        </tr>
      </TableHeader>
      <tbody>
        {dummyData.map((item, index) => (
           <tr key={index}>
           <td style={{ padding: "10px" }}>{item.num}</td>
           <td style={{ padding: "10px" }}>
             <a href="view.html">{item.title}</a>
           </td>
           <td style={{ padding: "10px" }}>{item.writer}</td>
           <td style={{ padding: "10px" }}>{item.date}</td>
           <td style={{ padding: "10px" }}>{item.count}</td>
         </tr>
        ))}
      </tbody>
    </BoardTable>
    </ListWrapper>
  );
};

export default BoardList;
