import { EChartOption } from 'echarts';

import { getChartDataSet, getTimeArray, getRandomIntNumber } from 'utils/chart';
import { CHART_LIST_COLOR, ONE_WEEK_LIST } from 'utils/chart';

// 折线图
const getLineChartOptions = (dateTime: Array<string> = []): EChartOption => {
  let dateArray = ONE_WEEK_LIST;
  if (dateTime.length > 0) {
    dateArray = getTimeArray(dateTime, 7, 'YYYY-MM-DD');
  }

  return {
    tooltip: {
      trigger: 'item',
    },
    grid: {
      top: '5%',
      right: '10px',
      left: '30px',
      bottom: '60px',
    },
    legend: {
      left: 'center',
      bottom: '0',
      orient: 'horizontal',
      data: ['杯子', '茶叶', '蜂蜜', '面粉'],
    },
    xAxis: {
      type: 'category',
      data: dateArray,
      boundaryGap: false,
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.4)',
      },
      axisLine: {
        lineStyle: {
          color: '#E3E6EB',
          width: 1,
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.4)',
      },
    },
    series: [
      {
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,

        name: '杯子',
        data: [
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
        ],
        showSymbol: true,
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 1,
        },
      },
      {
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        name: '茶叶',
        data: [
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
        ],
        showSymbol: true,
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 1,
        },
      },
      {
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        name: '蜂蜜',
        data: [
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
        ],
        showSymbol: true,
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 1,
        },
      },
      {
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        name: '面粉',
        data: [
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
          getRandomIntNumber(),
        ],
        showSymbol: true,
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 1,
        },
      },
    ],
  };
};

// 散点图
const getScatterChartOptions = (dateTime: Array<string> = []): EChartOption => {
  const [timeArray, inArray, outArray] = getChartDataSet(dateTime);
  return {
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      data: timeArray,
      axisLabel: {
        color: 'rgba(0,0,0,0.4)',
      },
      axisLine: {
        lineStyle: {
          color: '#E3E6EB',
          width: 1,
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.4)',
      },
    },
    grid: {
      top: '5px',
      left: '25px',
      right: '5px',
      bottom: '60px',
    },
    legend: {
      left: 'center',
      bottom: '0',
      orient: 'horizontal',
      data: ['按摩仪', '咖啡机'],
    },
    series: [
      {
        name: '按摩仪',
        symbolSize: 10,
        data: outArray,
        type: 'scatter',
      },
      {
        name: '咖啡机',
        symbolSize: 10,
        data: inArray,
        type: 'scatter',
      },
    ],
  };
};

export { getLineChartOptions, getScatterChartOptions };
