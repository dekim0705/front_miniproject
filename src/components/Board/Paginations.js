import React, { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import boardAxiosApi from "../../api/BoardAxiosApi";

const Pages = ({ boardNum, path }) => {
  const navigate = useNavigate();
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchTotalPosts = async () => {
      try {
        const response = await boardAxiosApi.getPostCount(boardNum);
        setTotalPosts(response.data);
      } catch (error) {
        console.error('전체 게시물 수를 불러올 수 없습니다:', error);
      }
    };

    fetchTotalPosts();
  }, [boardNum]);

  const handlePageChange = (event, value) => {
    navigate(`${path}/${value}`);
  };

  const postsPerPage = boardNum === 4 ? 6 : 8;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <Stack spacing={2} sx={{ alignItems: 'center', padding: '40px' }}>
      <Pagination count={totalPages} size="large" onChange={handlePageChange} />
    </Stack>
  );
};

export default Pages;
