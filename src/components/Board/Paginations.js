import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pages =() => {
  return (
       <Stack spacing={2} sx={{ alignItems: 'center', paddingTop: '35px' }}>
      <Pagination count={5} size="large" />
        </Stack>
      );
    }
    
    export default Pages;
    
