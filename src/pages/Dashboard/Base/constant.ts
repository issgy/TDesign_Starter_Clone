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
