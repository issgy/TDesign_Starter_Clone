import { EChartOption } from 'echarts';
import { ONE_WEEK_LIST, CHART_LIST_COLOR } from '../common/constant';

export interface DashboardPanel {
  title: string;
  number: string | number;
  leftType: string;
  upTrend?: string;
  downTrend?: string;
}

export const PANE_LIST: DashboardPanel[] = [
  {
    title: '总收入',
    number: '¥ 28,425.00',
    upTrend: '20.5%',
    leftType: 'echarts-line',
  },
  {
    title: '总退款',
    number: '¥ 768.00',
    downTrend: '20.5%',
    leftType: 'echarts-bar',
  },
  {
    title: '活跃用户（个）',
    number: '1126',
    downTrend: '20.5%',
    leftType: 'icon-usergroup',
  },
  {
    title: '产生订单（个）',
    number: 527,
    downTrend: '20.5%',
    leftType: 'icon-file-paste',
  },
];

export const MICRO_CHART_OPTIONS_LINE: EChartOption = {
  xAxis: {
    type: 'category',
    show: false,
    data: ONE_WEEK_LIST,
  },
  yAxis: {
    show: false,
    type: 'value',
  },
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    tooltip: {
      show: false,
    },
  },
  color: ['#fff'],
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      showSymbol: false,
    },
  ],
};

export const MICRO_CHART_OPTIONS_BAR: EChartOption = {
  xAxis: {
    type: 'category',
    show: false,
    data: ONE_WEEK_LIST,
  },
  yAxis: {
    show: false,
    type: 'value',
  },
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    tooltip: {
      show: false,
    },
  },
  color: CHART_LIST_COLOR,
  series: [
    {
      data: [
        100,
        130,
        184,
        218,
        {
          value: 135,
          itemStyle: {
            color: CHART_LIST_COLOR[1],
          },
        },
        {
          value: 118,
          itemStyle: {
            color: CHART_LIST_COLOR[1],
          },
        },
        {
          value: 60,
          itemStyle: {
            color: CHART_LIST_COLOR[1],
          },
        },
      ],
      type: 'bar',
      barWidth: 9,
    },
  ],
};
