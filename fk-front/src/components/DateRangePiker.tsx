//import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

interface DateRangePikerProps {
  setDataFilter: React.Dispatch<React.SetStateAction<any>>;
}

const DateRangePiker: React.FC<DateRangePikerProps> = ({setDataFilter}) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          sx={{backgroundColor: "white", borderRadius: "5px", border: "1px solid #ffffff"}}
          label="Start"
          onChange={(newValue) => {
            if (newValue){
              setDataFilter((prev: any) => {
                return {
                  ...prev,
                  dateInit: (newValue as dayjs.Dayjs ).toDate().toISOString()
                }
              });
            }
          }}
        />
        <DatePicker
          sx={{backgroundColor: "white", borderRadius: "5px", border: "1px solid #ffffff"}}
          label="End"
          onChange={(newValue) => {
            if (newValue){
              setDataFilter((prev: any) => {
                return {
                  ...prev,
                  dateEnd: (newValue as dayjs.Dayjs ).toDate().toISOString()
                }
              });
            }
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default DateRangePiker;

