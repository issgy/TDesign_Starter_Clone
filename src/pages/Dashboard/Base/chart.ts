import type { EChartOption } from 'echarts';
import getChartDataSet from '../common/chart';

// 折线图
const getLineChartOptions = (dateTime: Array<string> = []): EChartOption => {
  // timeArray:['MM-DD','MM-DD',....]
  // inArray和outArray:10个1~100以内的随机数字符['','',...]
  const [timeArray, inArray, outArray] = getChartDataSet(dateTime);
  return {
    // 提示框
    tooltip: {
      trigger: 'item', // 数据项图形触发
    },
    grid: {
      left: '0',
      right: '20',
      bottom: '20',
      containLabel: true,
    },
    legend: {
      left: 'center',
      bottom: '0',
      orient: 'horizontal', // 横向布局
      data: ['本月', '上月'],
      textStyle: {
        fontSize: 12,
      },
    },
    xAxis: {
      type: 'category',
      data: timeArray,
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '本月',
        data: outArray,
        type: 'line',
        smooth: false,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          borderWidth: 1,
        },
        areaStyle: {
          color: '#0053D92F',
        },
      },
      {
        name: '上月',
        data: inArray,
        type: 'line',
        smooth: false,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          borderWidth: 1,
        },
      },
    ],
  };
};

export { getLineChartOptions };
