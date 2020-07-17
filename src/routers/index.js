import Login from '../pages/login/index.js';
import Demo1 from '../pages/function/demo1/index.jsx';
import Basic from '@/components/basic/index.jsx';
// const routerConfig = [
//   {
//     path: '/login',
//     name: '登录',
//     exact: true,
//     component: Login
//   },
//   {
//     path: '/demo1',
//     name: 'demo1',
//     exact: true,
//     component: Demo1
//   },
//   { path: "/", exact: true, redirect: "/login" },
// ]
const routerConfig = [
  {
    path: '/login/123',
    name: '登录',
    exact: true,
    component: Login
  },
  {
    path: '/function',
    component: Basic,
    childRoutes: [
      {
        path: '/function/demo1',
        name: 'demo1',
        exact: true,
        component: Demo1
      }
    ]
  },
  { path: "/", exact: true, redirect: "/function/demo1" },
]

export default routerConfig;