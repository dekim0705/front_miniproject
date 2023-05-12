import React, { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import boardAxiosApi from "../../api/BoardAxiosApi";


const Pages = ({ boardNum, path, keyword, resultData }) => {
  const navigate = useNavigate();
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTotalPosts = async () => {
      try {
        if (resultData) {
          const result = await boardAxiosApi.getSearchCount(boardNum, keyword);
          setTotalPosts(result.data);
        } else {
          const response = await boardAxiosApi.getPostCount(boardNum);
          setTotalPosts(response.data);
        }
      } catch (error) {
        console.error('전체 게시물 수를 불러올 수 없습니다:', error);
      }
    };
    fetchTotalPosts();
  }, [boardNum, keyword, resultData]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    if (resultData) {
      navigate(`${path}/${value}?keyword=${keyword}`);
    } else {
      navigate(`${path}/${value}`);
    }
  };

  const postsPerPage = boardNum === 4 ? 6 : 9;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const boundaryCount = 1;
  const nearbyCount = 1;

  return (
    <Stack sx={{ alignItems: 'center', padding: '30px' }}>
      <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} boundaryCount={boundaryCount} nearbyCount={nearbyCount}/>
    </Stack>
  );
};

export default Pages;
