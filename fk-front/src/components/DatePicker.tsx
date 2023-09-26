import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import React from "react";

interface ResponsiveDateTimePickersProps {
  label: string;
  setSelectedDate: (newDate: string) => void;
}

const ResponsiveDateTimePickers: React.FC<ResponsiveDateTimePickersProps> = ({setSelectedDate, label}) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'MobileDateTimePicker',
        ]}
      >
        <DemoItem label={label}>
          <MobileDateTimePicker
            defaultValue={dayjs(new Date())}
            minDateTime={dayjs(new Date())}
            onChange={(newValue) => {
              if (newValue){
                setSelectedDate(newValue.toDate().toISOString());
              }
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default ResponsiveDateTimePickers;
