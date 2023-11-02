import React from 'react';
import { DateRangePicker } from 'tdesign-react';
import { RECENT_7_DAYS } from '../date';

const LastWeekDatePicker = (onChange: (value: Array<string>) => void) => (
  <DateRangePicker
    style={{ width: 240 }}
    mode='date'
    defaultValue={RECENT_7_DAYS.map((item) => item.format('YYYY-MM-DD'))}
    onChange={(value) => onChange(value as string[])}
  />
);

export default LastWeekDatePicker;
