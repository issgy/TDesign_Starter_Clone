import type { EChartOption } from 'echarts';
import getChartDataSet from '../common/chart';
import { CHART_LIST_COLOR } from '../common/constant';

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

//  饼图
const getPieChartsOptions = (radius = 42): EChartOption => ({
  tooltip: {
    trigger: 'item',
  },
  grid: {
    top: '0',
    right: '0',
  },
  legend: {
    itemWidth: 12,
    itemHeight: 4,
    textStyle: {
      fontSize: 12,
    },
    left: 'center',
    bottom: '0',
    orient: 'horizontal', // legend 横向布局。
  },
  series: [
    {
      name: '销售渠道',
      type: 'pie',
      radius: ['48%', '60%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'center',
        formatter: ['{value|{d}%}', '{name|{b}渠道占比}'].join('\n'),
        rich: {
          value: {
            fontSize: 28,
            fontWeight: 'normal',
            lineHeight: 46,
          },
          name: {
            color: '#909399',
            fontSize: 12,
            lineHeight: 14,
          },
        },
      },
      emphasis: {
        label: {
          show: true,
          formatter: ['{value|{d}%}', '{name|{b}渠道占比}'].join('\n'),
          rich: {
            value: {
              fontSize: 28,
              fontWeight: 'normal',
              lineHeight: 46,
            },
            name: {
              color: '#909399',
              fontSize: 12,
              lineHeight: 14,
            },
          },
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: '线上' },
        { value: radius * 7, name: '门店' },
      ],
    },
  ],
});

// 柱状图
const getBarChartOptions = (dateTime: Array<string> = []): EChartOption => {
  const [timeArray, inArray, outArray] = getChartDataSet(dateTime);
  return {
    color: CHART_LIST_COLOR,
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'category',
      data: timeArray,
      axisLine: {
        lineStyle: {
          color: CHART_LIST_COLOR[1],
          width: 2,
        },
      },
    },
    yAxis: {
      type: 'value',
    },
    grid: {
      top: '5%',
      left: '25',
      right: 0,
      bottom: '60',
    },
    legend: {
      left: 'center',
      bottom: '0',
      orient: 'horizontal',
      data: ['本月', '上月'],
      icon: 'rect',
      itemWidth: 12,
      itemHeight: 4,
      itemGap: 48,
      textStyle: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.6)',
      },
    },
    series: [
      {
        name: '本月',
        data: outArray,
        type: 'bar',
      },
      {
        name: '上月',
        data: inArray,
        type: 'bar',
        itemStyle: {
          color: CHART_LIST_COLOR[1],
        },
      },
    ],
  };
};

export { getLineChartOptions, getPieChartsOptions, getBarChartOptions };
