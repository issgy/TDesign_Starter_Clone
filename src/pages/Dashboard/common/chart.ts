import dayjs from 'dayjs';
import { RECENT_7_DAYS } from './date';

type ChartValue = number | string;

function getRandomIntNumber(): number {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

function getTimeArray(dateTime: string[] = [], divideNum = 10, format = 'MM-DD'): string[] {
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

const getChartDataSet = (dateTime: Array<string> = [], divideNum = 10): ChartValue[][] => {
  const timeArray = getTimeArray(dateTime, divideNum);
  const inArray = [];
  const outArray = [];
  for (let i = 0; i < divideNum; i++) {
    inArray.push(getRandomIntNumber().toString());
    outArray.push(getRandomIntNumber().toString());
  }
  return [timeArray, inArray, outArray];
};

export default getChartDataSet;
export { getTimeArray, getRandomIntNumber };
