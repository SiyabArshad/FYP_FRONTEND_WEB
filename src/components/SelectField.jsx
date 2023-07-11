import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useSelector, useDispatch } from "react-redux";

export default function SelectField({ duration }) {
  const [age, setAge] = React.useState(6);

  const handleChange = (event) => {
    setAge(event.target.value);
    duration(event.target.value);
  };

  return (
    <Box width={500} sx={{ maxWidth: 120 }}>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Durations</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{ background: "#ffffff" }}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={6}>6 Months</MenuItem>
          <MenuItem value={12}>1 Year</MenuItem>
          <MenuItem value={60}>5 Year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
