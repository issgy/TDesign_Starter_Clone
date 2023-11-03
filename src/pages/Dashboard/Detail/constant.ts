interface DashboardPanel {
  title: string;
  number: string | number;
  leftType?: string;
  upTrend?: string;
  downTrend?: string;
}

const PANE_LIST: DashboardPanel[] = [
  {
    title: '总申请次数(次)',
    number: 1126,
    upTrend: '10%',
  },
  {
    title: '供应商数量(个)',
    number: 13,
    downTrend: '13%',
  },
  {
    title: '采购商品品类(类)',
    number: 4,
    upTrend: '10%',
  },
  {
    title: '申请人数量(人)',
    number: 90,
    downTrend: '44%',
  },
  {
    title: '申请完成率(%)',
    number: 80.5,
    upTrend: '70%',
  },
  {
    title: '到货及时率(%)',
    number: 78,
    upTrend: '16%',
  },
];

export default PANE_LIST;