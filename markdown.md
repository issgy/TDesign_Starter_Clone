## 10.31

### React-router 的钩子函数:

useLocation():用于获取当前页面的 url 相关信息
const location = useLocation()
//当前页面路径 location.pathname
//搜索参数 location.search
//哈希值 location.hash

useHistory()和 useNavigate()：用于在函数组件中进行导航操作。v5 或更早版本使用
useHistory()：返回一个 history 对象，包含了导航相关的方法和属性，
const history = useHistory()
//跳转新路径 history.push('路径')
//返回上一页 history.goBack()

useNavigate()：返回一个 navigate 函数，而不是一个对象，所以在使用的时候应该直接调用函数而不是访问对象属性，是 React Router v6 版本新特性
const navigate = useNavigate()
//跳转新路径 navigate('路径')

1、完成 DashBoard 的 TopPanel 部分

## 11.2

1、使用组件库的 DateRangePicker 组件以及轻量级 JS 日期库 dayjs 封装一个日期选择器
2、使用 ReactEcharts 组件完成折线图的展示

## 11.2

1、完成销售订单排名和采购订单排名的表格展示
2、完成了出库概览的展示

## 11.3

1、完成概览仪表盘界面
2、完成仪表盘本月采购申请情况的展示

## 11.4

1、完成了统计报表页

## 11.5

1、基础列表页

## 11.6

1、完成了筛选列表页

## 11.7

1、完成树状筛选列表页
2、完成页面配置

## 11.8

1、完成基础表单页
2、完成分布表单页

# 11.9

1、完成基础详情页
2、完成二级详情页

# 11.12

1、完成多卡片详情页
2、完成数据详情页

# 11.14

1、完成了个人中心页
