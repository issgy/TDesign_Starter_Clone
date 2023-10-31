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