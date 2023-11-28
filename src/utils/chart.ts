import dayjs, { Dayjs } from 'dayjs';

type ChartValue = number | string;

const RECENT_7_DAYS: [Dayjs, Dayjs] = [dayjs().subtract(7, 'day'), dayjs().subtract(1, 'day')];
export const ONE_WEEK_LIST: Array<string> = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

export function getRandomIntNumber(): number {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

export function getTimeArray(dateTime: string[] = [], divideNum = 10, format = 'MM-DD'): string[] {
  const timeArray: string[] = [];
  if (dateTime.length === 0) {
    dateTime.push(...RECENT_7_DAYS.map((item) => item.format('MM-DD')));
  }
  for (let i = 0; i < divideNum; i++) {
    const dateAbsTime: number = (new Date(dateTime[1]).getTime() - new Date(dateTime[0]).getTime()) / divideNum;
    const timeNode: number = new Date(dateTime[0]).getTime() + dateAbsTime * i;
    timeArray.push(dayjs(timeNode).format(format));
  }
  return timeArray;
}

export const getChartDataSet = (dateTime: Array<string> = [], divideNum = 10): ChartValue[][] => {
  const timeArray = getTimeArray(dateTime, divideNum);
  const inArray = [];
  const outArray = [];
  for (let i = 0; i < divideNum; i++) {
    inArray.push(getRandomIntNumber().toString());
    outArray.push(getRandomIntNumber().toString());
  }
  return [timeArray, inArray, outArray];
};
