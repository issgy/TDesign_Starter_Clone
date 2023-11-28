import { ETheme } from 'types/index.d';

export const defaultColor = ['#0052D9', '#0594FA', '#00A870', '#EBB105', '#ED7B2F', '#E34D59', '#ED49B4', '#834EC2'];

export const CHART_COLORS = {
  [ETheme.light]: {
    textColor: 'rgba(0, 0, 0, 0.9)',
    placeholderColor: 'rgba(0, 0, 0, 0.35)',
    borderColor: '#dcdcdc',
    containerColor: '#fff',
  },
  [ETheme.dark]: {
    textColor: 'rgba(255, 255, 255, 0.9)',
    placeholderColor: 'rgba(255, 255, 255, 0.35)',
    borderColor: '#5e5e5e',
    containerColor: '#242424',
  },
};
