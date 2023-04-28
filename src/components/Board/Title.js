import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TitleTextField() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: '15px',
      }}
    >
      <TextField
        label="제목"
        id="title"
        sx={{
          width: '70%',
        }}
      />
    </Box>
  );
}
