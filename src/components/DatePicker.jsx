import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const DatePickers = ({ datefunc }) => {
  const [value, setValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={(newValue) => {
          datefunc(newValue);
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePickers;
