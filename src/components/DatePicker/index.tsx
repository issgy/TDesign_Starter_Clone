import React from 'react';
import { DateRangePicker } from 'tdesign-react';
import dayjs, { Dayjs } from 'dayjs';

const RECENT_7_DAYS: [Dayjs, Dayjs] = [dayjs().subtract(7, 'day'), dayjs().subtract(1, 'day')];

const LastWeekDatePicker = (onChange: (value: Array<string>) => void) => (
  <DateRangePicker
    style={{ width: 240 }}
    mode='date'
    defaultValue={RECENT_7_DAYS.map((item) => item.format('YYYY-MM-DD'))}
    onChange={(value) => onChange(value as string[])}
  />
);

export default LastWeekDatePicker;
