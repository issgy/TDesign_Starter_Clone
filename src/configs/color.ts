import { ETheme } from 'types/index.d';

export const defaultColor = ['#0052d9', '#0594fa', '#00a870', '#ebb105', '#ed7b2f', '#e34d59', '#ed49b4', '#834ec2'];

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

export const colorMap: {
  [key: string]: string;
} = {
  '#0052d9': '',
  '#0594fa': 'cyan',
  '#00a870': 'green',
  '#ebb105': 'yellow',
  '#ed7b2f': 'orange',
  '#e34d59': 'red',
  '#ed49b4': 'pink',
  '#834ec2': 'purple',

  '#4582e6': '',
  '#29a4fb': 'cyan',
  '#03a56f': 'green',
  '#ca8d03': 'yellow',
  '#ea7b84': 'red',
  '#f172c5': 'pink',
  '#ab87d5': 'purple',
};
