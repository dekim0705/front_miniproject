import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TagField = ({value, onChange}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '5px',
      }}
    >
      <TextField
        label="태그"
        id="title"
        sx={{width: '70%',}}
        value={value}
        onChange={onChange}/>
    </Box>
  );
}

export default TagField;
