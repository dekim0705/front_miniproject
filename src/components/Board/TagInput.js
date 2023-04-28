import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TagField() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '15px',
      }}
    >
      <TextField
        label="태그"
        id="title"
        sx={{width: '70%',}}/>
    </Box>
  );
}
