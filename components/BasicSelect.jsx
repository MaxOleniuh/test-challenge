import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [content, setContent] = React.useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Show</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={content}
          label="Show"
          onChange={handleChange}
        >
          <MenuItem value={"Everything"}>Everything</MenuItem>
          <MenuItem value={"News"}>News</MenuItem>
          <MenuItem value={"More"}>More</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}